import React, { PureComponent } from 'react'; 
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export const mapConfig = {
  center: [-19.0123457, -57.6018532],
  zoom: 17
};

export var bole = false


class ReactLeafletMap extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      position: [],
      inicio: [-19.009769, -57.654621],
      existe: false
    }
  }

  componentWillReceiveProps(next){

    next.bus.map(data => {
      this.setState({
        existe: true,
        position: next.bus
      })
      return null
    })

  }


  render() {
    const { existe, position } = this.state
    return (
      <div className="map">
        <Map style={{ height: "91vh" }} center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
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