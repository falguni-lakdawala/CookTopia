import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    tooltip={(input) => {
        const data=input.datum.data
      return <div>{data.value+" "+data.unit}</div>;
    }}
    margin={{ top: 40, right: 110, bottom: 40, left: 110 }}
    innerRadius={0.4}
    padAngle={2}
    cornerRadius={4}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0]] }}
    arcLinkLabelsSkipAngle={0}
    arcLinkLabelsTextColor="#000000"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={0}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 10]] }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    // legends={[
    //   {
    //     anchor: "bottom",
    //     direction: "row",
    //     justify: false,
    //     translateX: 0,
    //     translateY: 56,
    //     itemsSpacing: 0,
    //     itemWidth: 100,
    //     itemHeight: 18,
    //     itemTextColor: "#999",
    //     itemDirection: "left-to-right",
    //     itemOpacity: 1,
    //     symbolSize: 18,
    //     symbolShape: "circle",
    //     effects: [
    //       {
    //         on: "hover",
    //         style: {
    //           itemTextColor: "#000",
    //         },
    //       },
    //     ],
    //   },
    // ]}
  />
);

MyResponsivePie.defaultProps = {
  data: [
    {
      id: "Carbohydrates",
      label:"Carbohydrates",
      value: 26.35,
      color: "hsl(138, 45%, 90%)",
    },
    {
      id: "Sugar",
      label: "Sugar",
      value: 9.6,
      color: "hsl(205, 100%, 83%)",
    },
    {
      id: "Calcium",
      label: "Calcium",
      value: 21.87,
      color: "hsl(0, 100%, 90%)",
    },
    {
      id: "Folate",
      label: "Folate",
      value: 15.21,
      color: "hsl(35, 100%, 72%)",
    },
    {
      id: "Vitamin C",
      label: "Vitamin C",
      value: 71.05,
      color: "hsl(43, 100%, 80%)",
    },
  ],
};


export default MyResponsivePie;