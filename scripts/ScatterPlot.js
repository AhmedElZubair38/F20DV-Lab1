export default class ScatterPlot {

    width; height; margin;
    svg; chart; dots; axisX; axisY; labelX; labelY;
    scaleX; scaleY;
    data;

    constructor(container, width, height, margin){

    this.width = width;
    this.height = height;
    this.margin = margin;

    this.svg = d3.select(container).append('svg')
        .classed('scatterplot', true)
        .attr('width', this.width).attr('height', this.height);
    this.chart = this.svg.append('g')
        .attr('transform',
        `translate(${this.margin[2]},${this.margin[0]})`);

    this.dots = this.chart.selectAll('circle.dot');
    this.axisX = this.svg.append('g')
        .attr('transform',
        `translate(${this.margin[2]},${this.height-this.margin[1]})`);
    this.axisY = this.svg.append('g')
        .attr('transform',
        `translate(${this.margin[2]},${this.margin[0]})`);
    this.labelX = this.svg.append('text')
        .attr('transform', `translate(${this.width/2},${this.height})`)
        .style('text-anchor', 'middle').attr('dy',-5);
    this.labelY = this.svg.append('text')
        .attr('transform', `translate(0,${this.margin[0]})rotate(-90)`)
        .style('text-anchor', 'end').attr('dy',15);

    }

    #updateScales(){

        let chartWidth = this.width-this.margin[2]-this.margin[3],
        chartHeight = this.height-this.margin[0]-this.margin[1];
        let rangeX = [0, chartWidth],
        rangeY = [chartHeight, 0];
        let domainX = this.data.map(d=>d[0]),
        domainY = [0, d3.max(this.data, d=>d[1])];
        this.scaleX = d3.scaleBand(domainX, rangeX).padding(0.2);
        this.scaleY = d3.scaleLinear(domainY, rangeY);
    }
        
    #updateAxes(){

        let axisGenX = d3.axisBottom(this.scaleX),
        axisGenY = d3.axisLeft(this.scaleY);
        this.axisX.call(axisGenX);
        this.axisY.call(axisGenY);
    }

    #updateDots(){

        this.dots = this.chart.selectAll('circle.dot')  // Select circles again
        .data(this.data, d=>d[0])
        .join('circle')
        .classed('dot', true)
        .attr('cx', d=>this.scaleX(d[0]) + this.scaleX.bandwidth()/2 )
        .attr('cy', d=>this.scaleY(d[1]) + this.margin[0])
        .attr('r', 9);
    }

    #updateLabels(){

        this.labelX.text('City');
        this.labelY.text('Elevation (m)');
    }

    render(data){

        this.data = data;
        this.#updateScales();
        this.#updateAxes();
        this.#updateDots();
        this.#updateLabels();
    }

    setLabels(labelX='categories', labelY='values'){

        this.labelX.text(labelX);
        this.labelY.text(labelY);
        return this;
    }

}