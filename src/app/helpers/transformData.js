module.exports = async function transformChartData(data) {
    return data.map(item => ({
      _id: item._id,
      count: item.count,
    }));
  }
  