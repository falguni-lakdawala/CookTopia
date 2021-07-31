import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveChartMobile = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
		theme={{
			fontSize: 16,
		}}
    tooltip={(input) => {
        const data=input.datum.data
      return <div>{data.value+" "+data.unit}</div>;
    }}
    margin={{ top: 20, right: 10, bottom: 250, left: 10 }}
    innerRadius={0.4}
    padAngle={2}
    cornerRadius={4}
    activeOuterRadiusOffset={16}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0]] }}
		enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={0}
    arcLinkLabelsTextColor="#000000"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 10]] }}
		colors={{ datum: 'data.color' }}
		onMouseEnter={(_data, event) => {
			const parentElement = event.target.parentElement;
			let childNumber = 0;
			parentElement.childNodes.forEach((el, index) => {
				if (el == event.target) {
					childNumber = index + 1;
					parentElement.parentElement.lastChild.childNodes.forEach((el, index) => {
						if ((index + 1) == childNumber) {
							el.childNodes.forEach(el => {
								if (el.tagName == 'text') {
									el.style.fontSize = '1.25rem';
								} else {
									el.style.transform = 'scale(1.2) translatex(-1.5px)';
								}
							});
						}
					})
				}
			});
		}}
		onMouseLeave={(_data, event) => {
			const parentElement = event.target.parentElement;
			parentElement.parentElement.lastChild.childNodes.forEach((el) => {
				el.childNodes.forEach(el => {
					if (el.tagName == 'text') {
						el.style.fontSize = '1rem';
					} else {
						el.style.transform = 'scale(1) translatex(0)';
					}
				});
			})
		}}
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
    legends={[
      {
        anchor: "bottom",
        direction: "column",
        justify: false,
        translateX: -10,
        translateY: 210,
        itemsSpacing: 20,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#000",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
							fontSize: '40'
            },
          },
        ],
      },
    ]}
  />
);

MyResponsiveChartMobile.defaultProps = {
  data: [
    {
      id: "Carbohydrates",
      label:"Carbohydrates",
      value: 26.35,
      color: "#DAF1E1",
    },
    {
      id: "Vitamin C",
      label: "Vitamin C",
      value: 71.05,
      color: "#FFE297",
    },
    {
      id: "Folate",
      label: "Folate",
      value: 15.21,
      color: "#FFC470",
    },
    {
      id: "Calcium",
      label: "Calcium",
      value: 21.87,
      color: "#FFCECE",
    },
    {
      id: "Sugar",
      label: "Sugar",
      value: 9.6,
      color: "#AADBFF",
    },
  ],
};


export default MyResponsiveChartMobile;