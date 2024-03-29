export default class BarChart {

    width; height; margin;
    svg; chart; bars; axisX; axisY; labelX; labelY;
    scaleX; scaleY;
    data;

    barClick= ()=>{};
    barHover= ()=>{};
    barOut= ()=>{};

    constructor(container, width, height, margin){

    this.width = width;
    this.height = height;
    this.margin = margin;

    this.svg = d3.select(container).append('svg')
        .classed('barchart', true)
        .attr('width', this.width).attr('height', this.height);
    this.chart = this.svg.append('g')
        .attr('transform',
        `translate(${this.margin[2]},${this.margin[0]})`);

    this.bars = this.chart.selectAll('rect.bar');
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
        
    #updateBars(){

        this.bars = this.bars
        .data(this.data, d=>d[0])
        .join('rect')
        .classed('bar', true)
        .attr('x', d=>this.scaleX(d[0]))
        .attr('height', d=>this.scaleY(0)-this.scaleY(d[1]))
        .attr('width', this.scaleX.bandwidth())
        .attr('y', d=>this.scaleY(d[1]))
        // .on('mouseover', (event, datum)=>{
            
        //     console.log(datum);
        //     d3.select(event.target).classed('highlighted', true);
        // })
        // .on('mouseout', (event, datum)=>{
            
        //     console.log(datum);
        //     d3.select(event.target).classed('highlighted', false);
        // });

        this.bars.selectAll('title').data(d=>[d]).join('title').text(d=>`${d[0]}: ${d[1]}`);

        this.#updateEvents();

    }

    #updateEvents(){
        this.bars.on('mouseover', (e,d)=>{
            this.barHover(e,d);
        })
            .on('mouseout', (e,d)=>{
                this.barOut(e,d);
            })
            .on('click', (e,d)=>{
                console.log('Bar clicked:',d);
                this.barClick(e,d);
            })
    }

    setBarClick(f=()=>{}){
        this.barClick = f;
        this.#updateEvents();
        return this;
    }

    setBarHover(f=()=>{}){
        this.barHover = f;
        this.#updateEvents();
        return this;
    }

    setBarOut(f=()=>{}){
        this.barOut = f;
        this.#updateEvents();
        return this;
    }

    highlightBars(keys=[]){
        this.bars.classed('highlighted', false);
        this.bars.filter(d=>keys.includes(d[0]))
            .classed('highlighted', true);
        return this;
    }
        
    render(dataset){

        this.data = dataset;
        this.#updateScales();
        this.#updateBars();
        this.#updateAxes();
        return this;
    }
        
    setLabels(labelX='categories', labelY='values'){

        this.labelX.text(labelX);
        this.labelY.text(labelY);
        return this;
    }
    
}