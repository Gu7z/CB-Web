import React, { PureComponent } from 'react'; 
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export const mapConfig = {
  corumba: [-19.0112454,-57.6523608],
  ladario: [-19.0151184,-57.6075943],
  inicio: [-19.0191279,-57.6322559],
  center: [-19.0191279,-57.6322559],
  zoom: 14
};

export var bole = false


class ReactLeafletMap extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      position: [],
      centerAfter: [-19.0123457, -57.6018532],
      existe: false
    }
  }

  componentWillReceiveProps(next){
    if(next.mapLatLong.sending){ 
      if (next.mapLatLong.nome === "corumba"){
        mapConfig.center = mapConfig.corumba
      }else if (next.mapLatLong.nome === "ladario"){
        mapConfig.center = mapConfig.ladario
      }
    }else{
      mapConfig.center = mapConfig.inicio
    }

    if(next.bus.length){
      next.bus.map(data => {
        this.setState({
          existe: true,
          position: next.bus
        })
        return null
      })  
    }else{
      this.setState({existe: false})
      return null
    }
  }


  render() {
    const { existe, position } = this.state
    return (
      <div className="map">
        <Map style={{ height: "93.5vh" }} center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
  
          {
            existe ? 
              (
                position.map(data => {
                  return(
                    <Marker key={data.lat + data.long} position={[data.lat, data.long]} >
                      <Popup>
                        <span>{"teste"}</span>
                      </Popup>
                    </Marker>
                  )            
                })
              ) 
              : 
              (null)
          }

          

        </Map>
      </div>
    );
  }
}

export default ReactLeafletMap;