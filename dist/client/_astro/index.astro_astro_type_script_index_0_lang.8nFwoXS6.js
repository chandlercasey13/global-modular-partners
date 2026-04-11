import n from"https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet-src.esm.js";const t=document.getElementById("network-map");if(t){let s=function(e,a){return n.divIcon({className:"netmap-marker",html:`<span style="
            width:${a}px;height:${a}px;
            background:${e};
            border:2px solid #fff;
            border-radius:50%;
            display:block;
            box-shadow:0 0 8px ${e}88;
          "></span>`,iconSize:[a,a],iconAnchor:[a/2,a/2]})};const c=n.map(t,{center:[30,20],zoom:2,zoomControl:!0,scrollWheelZoom:!1,attributionControl:!1,minZoom:2,maxZoom:6});n.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{subdomains:"abcd"}).addTo(c);const i=[{name:"GMP Headquarters",loc:[37.8044,-122.2712],city:"Oakland, CA",type:"hq"},{name:"GMP Southern CA",loc:[33.6846,-117.8265],city:"Irvine, CA",type:"hq"},{name:"Agbayani Construction",loc:[37.6879,-122.4702],city:"Daly City, CA",type:"subsidiary"},{name:"RI Group (R.I. Group S.p.A.)",loc:[40.2834,18.0107],city:"Lecce, Italy",type:"subsidiary"},{name:"Hospitals Without Borders",loc:[37.8044,-122.2712],city:"Oakland, CA",type:"subsidiary"},{name:"HWB Europe",loc:[41.9028,12.4964],city:"Rome, Italy",type:"subsidiary"},{name:"EDIS USA",loc:[37.8044,-122.2712],city:"Oakland, CA",type:"subsidiary"},{name:"EDIS International",loc:[31.9454,35.9284],city:"Amman, Jordan",type:"subsidiary"}],r=s("#2B4B7E",14),l=s("#4a8c3f",12);i.forEach(e=>{const a=e.type==="hq"?r:l;n.marker(e.loc,{icon:a}).addTo(c).bindPopup(`<strong>${e.name}</strong><br/>${e.city}`)});const o=document.createElement("div");o.className="netmap-legend",o.innerHTML=`
        <div class="netmap-legend__row"><span class="netmap-legend__dot" style="background:#2B4B7E"></span> GMP Offices</div>
        <div class="netmap-legend__row"><span class="netmap-legend__dot" style="background:#4a8c3f"></span> Subsidiaries</div>
      `,t.appendChild(o)}
