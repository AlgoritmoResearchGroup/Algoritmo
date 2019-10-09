<template>
    <div id="mapid" style="height: 180px; width: 200px;"></div>
</template>

<script>
  export default{
      data() {
          return {
              map: null,
              tileLayer: null,
              placeList: []    
          }
      },
      mounted() {
          this.initMap(); 
          this.initMarkers();   
      },
      methods: {
          initMap() { 
              // INIT MAP
              this.map= L.map('map').setView([43.9493, 4.8055],13);
              this.tileLayer= 
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');  
              this.tileLayer.addTo(this.map); 
          },
          initMarkers() {
              // INIT MARKERS
                  this.services.entityController.listPlaces(()=>{            
                      console.log("please wait")
                  }, (results)=>{                                   
                      this.placeList= results;  
                      this.placeList.forEach(place => {                 
                          var marker= L.marker([place.geo.latitude, place.geo.longitude]);
                          marker.addTo(this.map); 
                          var layerGroup= L.layerGroup();                     
                          layerGroup.addLayer(marker);
                          place.marker_id= layerGroup.getLayerId(marker);
                          marker.on({click: this.clickMarker});  
                }, ()=>{
                    console.error("error")
                });                                          
            }); 
          }
    }


  }
</script>
