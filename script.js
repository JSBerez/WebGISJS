require (["esri/WebMap", "esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer", "esri/widgets/BasemapGallery", "esri/widgets/Expand", "esri/widgets/Sketch", "esri/layers/FeatureLayer"], //tutaj pobieramy Moduł z arcgis api for js
      function(WebMap, Map, MapView, GraphicsLayer, BasemapGallery, Expand, Sketch, FeatureLayer) //tutaj wiążemy Moduł z funkcją
      {
		
		let graphicsLayer = new GraphicsLayer();

		let webmap = new WebMap({
			portalItem: {
			  id: "131eb8b1a13640ddbb38049cd88941c1"
			},
			layers: [graphicsLayer]
		});

/*
		let map1 = new Map({
			basemap:"topo",
			layers: [graphicsLayer]
		}); //słowo klucz new + nazwa modułu
*/

		let mapContainer = new MapView({ // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html
			container: "viewDiv", //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej
			map: webmap,
//			map: map1,
            zoom: 6, // ustawienia zoomu
            center: [-1.16,52.61]
        });

		let trailheadsLayer = new FeatureLayer({
			url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
		});
	
		webmap.add(trailheadsLayer);


		let sketch = new Sketch({
			view: mapContainer,
			layer: graphicsLayer
		  });
	
		mapContainer.ui.add(sketch, "top-right");
		
		
        // dodanie widgetu map bazowych i jego minimalizowanie
         
		let basemapWidget = new BasemapGallery({
			container: document.createElement("div"),
			view: mapContainer
		});

		let basemapExpand = new Expand({
			expandIconClass: "esri-icon-basemap",
			view: mapContainer,
			content: basemapWidget.domNode
		});

		mapContainer.ui.add(basemapExpand, {
			position: "top-left"
		});
		
	  })