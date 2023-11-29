
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComponent = () => {
  const position = [ 23.6850, 90.3563]; 

  return (
   <div className='flex justify-center items-center h-[60vh] hidden lg:block'>
    <MapContainer className='h-full w-full overflow-hidden'  center={position} zoom={10}  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
       Bangladesh
      </Popup>
    </Marker>
    </MapContainer>
   </div>
  );
};

export default MapComponent;
