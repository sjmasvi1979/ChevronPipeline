
var markers = [
				{latLng: [30.44, -91.18], name: 'BATON ROUGE LA', style: {r: 10}},
				{latLng: [33.57, -84.39], name: 'ATLANTA AIRPORT', style: {r: 10}},
				{latLng: [30.44, -91.18], name: 'BATON ROUGE LA', style: {r: 10}},
				{latLng: [33.42, -86.78], name: 'BIRMINGHAM AL', style: {r: 10}},
				{latLng: [31.63, -89.55], name: 'COLLINS MS TRM 3PTY', style: {r: 10}},
				{latLng: [26.11, -80.39], name: 'COLOMBIA', style: {r: 10}},
				{latLng: [26.11, -80.39], name: 'DORAVILLE GA', style: {r: 10}},
				{latLng: [26.11, -80.39], name: 'FORT LAUDERDALE FL', style: {r: 10}},
				{latLng: [30.07, -90.62], name: 'GARYVILLE LA MARINE', style: {r: 10}},
				{latLng: [30.33, -81.65], name: 'JACKSONVILLE FL', style: {r: 10}},
				{latLng: [40.71, -74.01], name: 'NY_HARBOR', style: {r: 10}},
				{latLng: [41.92, -95.47], name: 'PANAMA', style: {r: 10}},
				{latLng: [30.17, -85.67], name: 'PANAMA CITY FL', style: {r: 10}},
				{latLng: [29.66, -95.15], name: 'PASADENA TX', style: {r: 10}},
				{latLng: [30.36, -88.54], name: 'PASCAGOULA MS RFY CHEVRON', style: {r: 10}},
				{latLng: [27.92, -82.53], name: 'TAMPA (HOOKERS PT) FL', style: {r: 10}}
			  ];
			  
var connectors = [
				{ latLngFrom: [30.44, -91.18], latLngTo : [33.57, -84.39], pLineDetails:{ routeOrg : 'BATON ROUGE LA', routeDstn: 'ATLANTA AIRPORT', type: 'Pipe', product: 'JETA', contract: 'COLONIAL' } },
				{ latLngFrom: [29.66, -95.15], latLngTo : [33.57, -84.39], pLineDetails:{ routeOrg : 'PASADENA TX', routeDstn: 'ATLANTA AIRPORT', type: 'Pipe', product: 'JETA', contract: 'COLONIAL' } },
				{ latLngFrom: [30.44, -91.18], latLngTo : [33.42, -86.78], pLineDetails:{ routeOrg : 'BATON ROUGE LA', routeDstn: 'BIRMINGHAM AL', type: 'Pipe', product: 'SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [29.66, -95.15], latLngTo : [33.42, -86.78], pLineDetails:{ routeOrg : 'PASADENA TX', routeDstn: 'BIRMINGHAM AL', type: 'Pipe', product: 'SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [30.44, -91.18], latLngTo : [31.63, -89.55], pLineDetails:{ routeOrg : 'BATON ROUGE LA', routeDstn: 'COLLINS MS TRM 3PTY', type: 'Pipe', product: 'HS_DIESEL, JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [29.66, -95.15], latLngTo : [31.63, -89.55], pLineDetails:{ routeOrg : 'PASADENA TX', routeDstn: 'COLLINS MS TRM 3PTY', type: 'Pipe', product: 'HS_DIESEL, JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [30.07, -90.62], latLngTo : [26.11, -80.39], pLineDetails:{ routeOrg : 'GARYVILLE LA MARINE', routeDstn: 'COLOMBIA', type: 'Vessel', product: 'ULS_DIESEL', contract: 'NO NAME:GARYVILLE LA MARINE_TO_COLOMBIA:300000' } },
				{ latLngFrom: [30.44, -91.18], latLngTo : [26.11, -80.39], pLineDetails:{ routeOrg : 'BATON ROUGE LA', routeDstn: 'DORAVILLE GA', type: 'Pipe', product: 'SUBOCT_HIGHRVP_RUL, JETA', contract: 'PLANTATION' } },
				{ latLngFrom: [30.07, -90.62], latLngTo : [26.11, -80.39], pLineDetails:{ routeOrg : 'GARYVILLE LA MARINE', routeDstn: 'FORT LAUDERDALE FL', type: 'Vessel', product: 'ULS_DIESEL, SUBOCT_HIGHRVP_RUL, ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'ATB550-4:GARYVILLE LA MARINE_TO_FORT LAUDERDALE FL:150000' } },
				{ latLngFrom: [30.36, -88.54], latLngTo : [26.11, -80.39], pLineDetails:{ routeOrg : 'PASCAGOULA MS RFY CHEVRON', routeDstn: 'FORT LAUDERDALE FL', type: 'Vessel', product: 'JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'ATB550-4:PASCAGOULA MS RFY CHEVRON_TO_FORT LAUDERDALE FL:150000' } },
				{ latLngFrom: [30.07, -90.62], latLngTo : [30.33, -81.65], pLineDetails:{ routeOrg : 'GARYVILLE LA MARINE', routeDstn: 'JACKSONVILLE FL', type: 'Vessel', product: 'SUBOCT_HIGHRVP_RUL, ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'ATB550-4:GARYVILLE LA MARINE_TO_JACKSONVILLE FL:150000' } },
				{ latLngFrom: [30.36, -88.54], latLngTo : [30.33, -81.65], pLineDetails:{ routeOrg : 'PASCAGOULA MS RFY CHEVRON', routeDstn: 'JACKSONVILLE FL', type: 'Vessel', product: 'ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'ATB550-4:PASCAGOULA MS RFY CHEVRON_TO_JACKSONVILLE FL:150000' } },
				{ latLngFrom: [30.44, -91.18], latLngTo : [40.71, -74.01], pLineDetails:{ routeOrg : 'BATON ROUGE LA', routeDstn: 'NY_HARBOR', type: 'Pipe', product: 'HS_DIESEL, JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [29.66, -95.15], latLngTo : [40.71, -74.01], pLineDetails:{ routeOrg : 'PASADENA TX', routeDstn: 'NY_HARBOR', type: 'Pipe', product: 'HS_DIESEL, JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL, MOGAS_HIGHRVP_RUL', contract: 'COLONIAL' } },
				{ latLngFrom: [30.07, -90.62], latLngTo : [41.92, -95.47], pLineDetails:{ routeOrg : 'GARYVILLE LA MARINE', routeDstn: 'PANAMA', type: 'Vessel', product: 'ULS_DIESEL', contract: 'NO NAME:GARYVILLE LA MARINE_TO_PANAMA:300000' } },
				{ latLngFrom: [30.36, -88.54], latLngTo : [41.92, -95.47], pLineDetails:{ routeOrg : 'PASCAGOULA MS RFY CHEVRON', routeDstn: 'PANAMA', type: 'Vessel', product: 'JETA, LS_DIESEL, ULS_DIESEL', contract: 'NO NAME:PASCAGOULA MS RFY CHEVRON_TO_PANAMA:300000' } },
				{ latLngFrom: [30.36, -88.54], latLngTo : [30.17, -85.67], pLineDetails:{ routeOrg : 'PASCAGOULA MS RFY CHEVRON', routeDstn: 'PANAMA CITY FL', type: 'Vessel', product: 'JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'NO NAME:PASCAGOULA MS RFY CHEVRON_TO_PANAMA CITY FL:25000' } },
				{ latLngFrom: [30.36, -88.54], latLngTo : [27.92, -82.49], pLineDetails:{ routeOrg : 'PASCAGOULA MS RFY CHEVRON', routeDstn: 'TAMPA (HOOKERS PT) FL', type: 'Vessel', product: 'JETA, ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'ATB550-4:PASCAGOULA MS RFY CHEVRON_TO_TAMPA (HOOKERS PT) FL:150000' } },
				{ latLngFrom: [30.07, -90.62], latLngTo : [27.92, -82.49], pLineDetails:{ routeOrg : 'GARYVILLE LA MARINE', routeDstn: 'TAMPA (PT TAMPA) FL', type: 'Vessel', product: 'ULS_DIESEL, SUBOCT_HIGHRVP_RUL', contract: 'SUNSHINE STATE:GARYVILLE LA MARINE_TO_TAMPA (PT TAMPA) FL:300000' } }
			];