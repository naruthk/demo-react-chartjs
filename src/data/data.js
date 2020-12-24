const labelsColorsKeyMap = [
  {
    key: "Dining",
    color: "#F29422"
  },
  {
    key: "Shopping",
    color: "#64E5D0"
  },
  {
    key: "Enjoy",
    color: "#F3578B"
  },
  {
    key: "Travel",
    color: "#5068EB"
  },
  {
    key: "Health",
    color: "#54BBB5"
  },
  {
    key: "Service",
    color: "#EF4439"
  },
  {
    key: "Education",
    color: "#C32CC2"
  },
]
export const data = {
  labels: labelsColorsKeyMap.map(item => item.key),
  datasets: [
    {
      label: 'Amount saved',
      data: [1750, 875, 175, 175, 175, 175, 0],
      backgroundColor: labelsColorsKeyMap.map(item => item.color),
      borderWidth: 2,
    },
  ],
}