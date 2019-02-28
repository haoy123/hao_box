/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react'
import esriLoader from 'esri-loader'

export default class ArcGISMap extends Component{
  constructor(props){
    super(props)
    this.tileMapUrl = "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
  }

  componentDidMount(){
    this.initMap()
  }

  initMap(){
    const mapURL = {
      url : "https://js.arcgis.com/4.7/dojo/dojo.js"
    }
    esriLoader.loadModules([
      "esri/Map",
      "esri/Basemap",
      "esri/layers/TileLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], mapURL).then(([Map,Basemap,TileLayer,MapView])=>{
      const layer = new TileLayer({
        url: this.tileMapUrl
      })
      const baseMap = new Basemap({
        baseLayers: [layer],
        title: "Custom Basemap",
        id: "myBasemap"
      });
      // Create a Map instance
      const map = new Map({
        basemap: baseMap
      });
      // Create a MapView instance (for 2D viewing) and reference the map instance
      const view = new MapView({
        center : [120.2, 32.1],
        map,
        container : "mapDiv",
        zoom:5
      });
    })
  }

  render(){
    const style = {
      width: '100%',
      height: '850px'
    }
    return(
      <div>
        <div id="mapDiv" style={style} />
      </div>
    )
  }
}
