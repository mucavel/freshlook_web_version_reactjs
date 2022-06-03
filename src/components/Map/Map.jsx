import React from "react";
import './css/Map.css';

const Map = () => {
    return(
        <div className="map">
            <iframe title="fresh-look-map" id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7174.16903118695!2d32.59159693472878!3d-25.965268422142803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69bcf78b5b04f%3A0x397b498c151fc907!2sGentleman&#39;s%20Barber%20Shop!5e0!3m2!1spt-PT!2smz!4v1647895107018!5m2!1spt-PT!2smz"
                    width="100%" 
                    height="100%" 
                    style={{border:'0'}} 
                    allowFullScreen="" 
                    loading="lazy">
            </iframe>   
        </div>
    );
}
export default Map;