class BarChart {
    constructor(model) {
        this.data = model.getData();
    }

    render(container) {
        const numbers = Object.entries(this.data.reduce((pre, cur) => {
            cur.status in pre ? pre[cur.status]++ : pre[cur.status] = 1
            return pre;
        }, {})).reduce((html, arry) => html += `<table>`+arry[0] + ':' + arry[1]+`</table>`, '');
        container.innerHTML = `${numbers}`;
    };
}

export default BarChart;