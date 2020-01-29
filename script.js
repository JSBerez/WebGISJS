require (["esri/WebMap","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/BasemapGallery", "esri/widgets/Expand"], //tutaj pobieramy Moduł z arcgis api for js
      function(WebMap, Map, MapView, FeatureLayer, BasemapGallery, Expand) //tutaj wiążemy Moduł z funkcją
      {
		let webmap = new WebMap({
			portalItem: {
			  id: "131eb8b1a13640ddbb38049cd88941c1"
			}
		});
//         let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
        let mapContainer = new MapView({ // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html
			container: "viewDiv", //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej
			map: webmap,
            zoom: 6, // ustawienia zoomu
            center: [-1.16,52.61]
        });

		let template = {
			title: "{Football_Stadiums_of_England_and_Wales}",
			content: [
				{
					type: "fields",
					fieldInfos: [
						{
							fieldName: "Division",
							label: "Poziom Rozgrywek"
						},
						{
							fieldName: "Team",
							label: "Zespół"
						},
						{
							fieldName: "Location",
							label: "Miejscowość"
						},
						{
							fieldName: "Stadium",
							label: "Stadion"
						},
						{
							fieldName: "Year_Open",
							label: "Rok Otwarcia"
						},
						{
							fieldName: "Capacity",
							label: "Pojemność"
						},
					]
				}
			]
		};
		
		
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