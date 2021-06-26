/// app.js
import React, { useState, useMemo, useCallback, useRef } from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer, ScatterplotLayer, PolygonLayer } from "@deck.gl/layers";
import * as node_data from "./data2.json";
import { OrthographicView } from "@deck.gl/core";

const dummy_polygons = [
  {
    contour: [
      [-100, -100],
      [-100, 100],
      [100, 100],
      [100, -100],
    ],
    zipcode: 94107,
    population: 26599,
    area: 6.11,
  },
];
function toRGB(string) {
  if (string === "unknown") {
    return [200, 200, 200];
  }
  string = string.split("").reverse().join("");
  var hash = 0;
  if (string.length === 0) return hash;
  for (var i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var rgb = [0, 0, 0];
  for (i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }
  if (rgb[0] + rgb[1] + rgb[2] < 150 || rgb[0] + rgb[1] + rgb[2] > 500) {
    return toRGB(string + "_");
  }
  return rgb;
}

let getMMatrix = (zoom) => [
  1 / 2 ** (zoom - 6),
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
];

// Data to be used by the LineLayer
let data = [];

node_data.default.forEach((node) => {
  let first_path = node.path[0];
  let first_node = node_data.default[first_path];

  if (first_node) {
    data.push({
      sourcePosition: [node.x, node.y],
      targetPosition: [node.x, first_node.y],
    });

    data.push({
      sourcePosition: [node.x, first_node.y],
      targetPosition: [first_node.x, first_node.y],
    });
  }
});
const getXval = (viewState) => 4 / 2 ** (viewState.zoom - 6);
// DeckGL react component
function Deck() {
  const [hoverInfo, setHoverInfo] = useState();

  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 10,
    zoom: 7,
    target: [5, 5],
  });
  const deckRef = useRef(null);
  const onViewStateChange = useCallback(
    ({ viewId, viewState, oldViewState }) => {
      if (viewId === "minimap") {
        return;
      }

      viewState["minimap"] = { zoom: 3.4, target: [4, 9] };
      viewState.target[0] = getXval(viewState);

      if (deckRef.current.viewports.length) {
        const main_vp = deckRef.current.viewports[0];
        const nw = main_vp.unproject([0, 0, 0]);
        const se = main_vp.unproject([main_vp.width, main_vp.height, 0]);
        se[0] = se[0] * 2 ** (viewState.zoom - 6);
        nw[0] = nw[0] * 2 ** (viewState.zoom - 6);
        viewState = { ...viewState, nw: nw, se: se };
        nw[0] = -500;
        se[0] = 500;

        setViewState(viewState);
      }
    },
    [deckRef]
  );

  const onClickOrMouseMove = useCallback(
    (event) => {
      if (event.buttons === 0 && event._reactName === "onMouseMove") {
        return false;
      }

      const pickInfo = deckRef.current.pickObject({
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        radius: 1,
      });
      //console.log(viewState);

      if (pickInfo && pickInfo.viewport.id === "minimap") {
        //viewState.target=pickInfo.coordinate
        //console.log(pickInfo)
        const newViewState = {
          ...viewState,
          target: [getXval(viewState), pickInfo.coordinate[1]],
        };
        onViewStateChange({ viewState: newViewState });
      }
    },
    [viewState, onViewStateChange]
  );

  const poly_layer = useMemo(
    () =>
      new PolygonLayer({
        //This dummy layer provides a gray background, but more importantly, it means that a picking event is always generated on clicks, allowing us to make pressing on the minimap change the view
        id: "mini-poly-layer",
        data: dummy_polygons,
        pickable: true,
        stroked: true,
        filled: true,
        wireframe: true,
        lineWidthMinPixels: 1,
        getPolygon: (d) => d.contour,

        getFillColor: (d) => [240, 240, 240],
        getLineColor: [80, 80, 80],
        getLineWidth: 1,
      }),
    []
  );

  const scatterplot_config = useMemo(() => {
    return {
      data: node_data.default.filter((x) => x.name != null),
      opacity: 0.7,
      radiusMinPixels: 1,
      radiusMaxPixels:2,
      getRadius: 4,
      radiusUnits:'pixels',
      getPosition: (d) => {
        return [d.x, d.y];
      },
      getFillColor: (d) => toRGB(d.lineage),
    };
  }, []);

  const scatter_layer_main = useMemo(
    () =>
      new ScatterplotLayer({
        ...scatterplot_config,
        radiusMinPixels: 1,
      radiusMaxPixels: 4,
      getRadius: 4,
      opacity: viewState.zoom>15?0.8 : 0.6,
        id: "main-scatter",
        modelMatrix: getMMatrix(viewState.zoom),
        pickable: true,
        getLineColor: d => [100,100, 100],
        stroked: viewState.zoom>15,
        lineWidthUnits:'pixels',
        lineWidthScale:1,
        onHover: (info) => setHoverInfo(info)
        
      }),
    [viewState, scatterplot_config]
  );

  const line_layer_main = useMemo(
    () =>
      new LineLayer({
        id: "main-lines",
        data,
        modelMatrix: getMMatrix(viewState.zoom),
      }),
    [viewState]
  );

  const pos_layer_mini = useMemo(
    () =>
      new PolygonLayer({
        id: "mini-pos",
        data: [viewState],
        opacity: 0.2,
        radiusMinPixels: 4,
        radiusMaxPixels: 4,
        getRadius: 4,
        getLineWidth: 0.1,
        getPolygon: (d) => [
          [d.nw[0], d.nw[1]],
          [d.se[0], d.nw[1]],
          [d.se[0], d.se[1]],
          [d.nw[0], d.se[1]],
        ],
        getFillColor: [255, 255, 255],
      }),
    [viewState]
  );

  const scatter_layer_mini = useMemo(
    () => new ScatterplotLayer({ id: "mini-scatter", ...scatterplot_config }),
    [scatterplot_config]
  );

  const line_layer_mini = useMemo(
    () =>
      new LineLayer({
        id: "mini-lines",
        data,
      }),
    []
  );

  const layers = useMemo(
    () => [
      poly_layer,
      line_layer_main,
      scatter_layer_main,
      line_layer_mini,
      scatter_layer_mini,
      pos_layer_mini,
    ],
    [
      poly_layer,
      line_layer_main,
      scatter_layer_main,
      line_layer_mini,
      scatter_layer_mini,
      pos_layer_mini,
    ]
  );

  window.deck = deckRef;

  return (
    <div
      className="w-full h-full relative"
      onClick={onClickOrMouseMove}
      onMouseMove={onClickOrMouseMove}
    >
      {" "}
      <DeckGL
        onAfterRender={() => {
          if (viewState.nw === undefined) {
            onViewStateChange({ viewState });
          }
        }}
        ref={deckRef}
        views={[
          new OrthographicView({ id: "main", controller: true }),
          new OrthographicView({
            id: "minimap",
            x: "79%",
            y: "1%",
            width: "20%",
            height: "35%",
            controller: true,
          }),
        ]}
        viewState={viewState}
        onViewStateChange={onViewStateChange}
        layerFilter={useCallback(({ layer, viewport }) => {
          return (
            (layer.id.startsWith("main") && viewport.id === "main") ||
            (layer.id.startsWith("mini") && viewport.id === "minimap")
          );
        }, [])}
        controller={true}
        layers={layers}
      >
        {hoverInfo && hoverInfo.object && (
          <div
            className="bg-gray-200 p-3 opacity-80 text-sm"
            style={{
              position: "absolute",
              zIndex: 1,
              pointerEvents: "none",
              left: hoverInfo.x,
              top: hoverInfo.y,
            }}
          >
            <h2 className="font-bold">{hoverInfo.object.name}</h2>
            <div>{hoverInfo.object.lineage}</div>
            <div className="italic">{hoverInfo.object.date}</div>
          </div>
        )}
      </DeckGL>
    </div>
  );
}

export default Deck;
