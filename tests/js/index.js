var mapConfig;

function drawMap(param) {
	$("#map").html("");
	map = new jvm.WorldMap({
		map: 'us_lcc_en', 
		backgroundColor: '#ffffff', 
		markers: param.markers,  
		connectors: param.connectors,
		showConnector: param.showConnector,
		showCaption: param.showCaption,
		zoomButtons: false,
		regionsSelectable: false,
		regionStyle: {
			initial: {
				fill: '#EEDB4E'
			}
		},
		captionStyle: {
			initial: {
				"fill": '#000000',
				"font-weight": 'bold',
				"font-family": 'Arial',
				"font-size": '12px',
				"stroke-width": "0.7",
				"stroke": 'white'
			}
		},
		markerStyle: {
			initial: {
				fill: '#668FAD',
				stroke: '#ffffff',
				"stroke-width": 1
			},
			hover: {
				fill: '#668FAD',
				stroke: '#ffffff',
				"stroke-width": 2
			}
		},
		connectorStyle: {
			initial: {
				stroke: '#ff0000',
				"stroke-opacity": 1,
				"stroke-width": 2	
			},
			hover: {
				stroke: '#0000ff',
				"stroke-opacity": 1,
				"stroke-width": 4	
			}
		},
		series: {
			markers: [{
				attribute: 'fill',
				scale: ['#C8EEFF', '#0071A4'],
				normalizeFunction: 'polynomial',
			},
			{
				attribute: 'r',
				scale: [10, 50],
				normalizeFunction: 'polynomial',
			}],
			connectors: {
				tooltip: {
					show: ['click','mouseover']
				}
			}
		},
		container: $('#map'),
		onRegionOver: function(event, index){
			//event.preventDefault();
		},
		onRegionLabelShow: function(event, index){
			event.preventDefault();
		},
		onMarkerOver: function(event, index){
			event.preventDefault();
		},
		onMarkerClick: function(e, code){
			event.preventDefault();
		}
	});
}

$(function(){

	var map,
		markerIndex = 0,
		markersCoords = {};
	  
	var mapConfig = {
		markers: markers,
		connectors: connectors,
		showConnector : false,
		showCaption : false
	};
	
	var criteriaItem = {
		contractType : [],
		vendorType : [],
		movementType : []
	};

	//Data Processing
	//Render Required Checkbox for Contract Type

	criteriaItem.movementType.push("Select All");
	$("#divMovementType").html("");
	$(connectors).each(function(idx, conItem){
		if(jQuery.inArray(conItem.pLineDetails.type, criteriaItem.movementType) == -1) {
			criteriaItem.movementType.push(conItem.pLineDetails.type);
			
			var el = $("#divMovementType");
			var curLabel = $("<label />").appendTo(el);
			$("<input />").attr({ 'id' : 'chkMT' + conItem.pLineDetails.type, 'type' : 'checkbox', }).appendTo(curLabel);
			$(curLabel).append(conItem.pLineDetails.type);
		}
	});
	
	
	mapConfig.showConnector = $("#chkShowConnector").attr("checked") || false;
	mapConfig.showCaption = $("#chkShowCaption").attr("checked") || false;
	  
	drawMap(mapConfig);
	
	//Event Binding to the CheckBoxes
	$("#divShowHide input[type='checkbox']").each(function(idx, elem) {
		$(elem).bind("click", function(ui, event) {
			var configName = this.id;
			configName = configName.replace("chk","");
			configName = configName[0].toLowerCase() + configName.substr(1);
			
			mapConfig[configName] = this.checked;
			
			drawMap(mapConfig);
		});
	});
	
		
});