var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_retourCA32site_1 = new ol.format.GeoJSON();
var features_retourCA32site_1 = format_retourCA32site_1.readFeatures(json_retourCA32site_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_retourCA32site_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_retourCA32site_1.addFeatures(features_retourCA32site_1);
var lyr_retourCA32site_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_retourCA32site_1, 
                style: style_retourCA32site_1,
                interactive: true,
                title: '<img src="styles/legend/retourCA32site_1.png" /> retour CA32 site'
            });
var format_Departement_32_2 = new ol.format.GeoJSON();
var features_Departement_32_2 = format_Departement_32_2.readFeatures(json_Departement_32_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departement_32_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departement_32_2.addFeatures(features_Departement_32_2);
var lyr_Departement_32_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departement_32_2, 
                style: style_Departement_32_2,
                interactive: false,
                title: '<img src="styles/legend/Departement_32_2.png" /> Departement_32'
            });
var format_Communes_32_3 = new ol.format.GeoJSON();
var features_Communes_32_3 = format_Communes_32_3.readFeatures(json_Communes_32_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_32_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_32_3.addFeatures(features_Communes_32_3);
var lyr_Communes_32_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_32_3, 
                style: style_Communes_32_3,
                interactive: false,
                title: '<img src="styles/legend/Communes_32_3.png" /> Communes_32'
            });
var format_PSE_Midour_2020_4 = new ol.format.GeoJSON();
var features_PSE_Midour_2020_4 = format_PSE_Midour_2020_4.readFeatures(json_PSE_Midour_2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSE_Midour_2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSE_Midour_2020_4.addFeatures(features_PSE_Midour_2020_4);
var lyr_PSE_Midour_2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSE_Midour_2020_4, 
                style: style_PSE_Midour_2020_4,
                interactive: false,
                title: '<img src="styles/legend/PSE_Midour_2020_4.png" /> PSE_Midour_2020'
            });
var format_PSE_Gelise_2020_5 = new ol.format.GeoJSON();
var features_PSE_Gelise_2020_5 = format_PSE_Gelise_2020_5.readFeatures(json_PSE_Gelise_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSE_Gelise_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSE_Gelise_2020_5.addFeatures(features_PSE_Gelise_2020_5);
var lyr_PSE_Gelise_2020_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSE_Gelise_2020_5, 
                style: style_PSE_Gelise_2020_5,
                interactive: false,
                title: '<img src="styles/legend/PSE_Gelise_2020_5.png" /> PSE_Gelise_2020'
            });
var format_PSE_AmontGers_2020_6 = new ol.format.GeoJSON();
var features_PSE_AmontGers_2020_6 = format_PSE_AmontGers_2020_6.readFeatures(json_PSE_AmontGers_2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSE_AmontGers_2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSE_AmontGers_2020_6.addFeatures(features_PSE_AmontGers_2020_6);
var lyr_PSE_AmontGers_2020_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSE_AmontGers_2020_6, 
                style: style_PSE_AmontGers_2020_6,
                interactive: false,
                title: '<img src="styles/legend/PSE_AmontGers_2020_6.png" /> PSE_AmontGers_2020'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_retourCA32site_1.setVisible(true);lyr_Departement_32_2.setVisible(true);lyr_Communes_32_3.setVisible(true);lyr_PSE_Midour_2020_4.setVisible(true);lyr_PSE_Gelise_2020_5.setVisible(true);lyr_PSE_AmontGers_2020_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_retourCA32site_1,lyr_Departement_32_2,lyr_Communes_32_3,lyr_PSE_Midour_2020_4,lyr_PSE_Gelise_2020_5,lyr_PSE_AmontGers_2020_6];
lyr_retourCA32site_1.set('fieldAliases', {'Retour': 'Retour', });
lyr_Departement_32_2.set('fieldAliases', {'RégION': 'RégION', 'ID_BDCARTO': 'ID_BDCARTO', 'DépARTEMEN': 'DépARTEMEN', 'DépARTEM0': 'DépARTEM0', 'DépARTEM1': 'DépARTEM1', 'ORDONNée_D': 'ORDONNée_D', });
lyr_Communes_32_3.set('fieldAliases', {'RégION': 'RégION', 'NOM_RégION': 'NOM_RégION', 'DépARTEMEN': 'DépARTEMEN', 'DépARTEM0': 'DépARTEM0', 'ARRONDISSE': 'ARRONDISSE', 'CANTON': 'CANTON', 'ID_BDCARTO': 'ID_BDCARTO', 'COMMUNE': 'COMMUNE', 'COMMUNE0': 'COMMUNE0', 'STATUT': 'STATUT', 'COMMUNE1': 'COMMUNE1', 'ORDONNée_C': 'ORDONNée_C', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'ComCom': 'ComCom', 'Pays': 'Pays', 'Nb_hab': 'Nb_hab', 'Ratio_PAC': 'Ratio_PAC', 'Pourc_bio': 'Pourc_bio', 'SURFACE': 'SURFACE', });
lyr_PSE_Midour_2020_4.set('fieldAliases', {'lib_PSE': 'lib_PSE', 'Code_PSE': 'Code_PSE', 'annee_pse': 'annee_pse', 'Area_m2': 'Area_m2', });
lyr_PSE_Gelise_2020_5.set('fieldAliases', {'lib_PSE': 'lib_PSE', 'Code_PSE': 'Code_PSE', 'commentair': 'commentair', 'annee_pse': 'annee_pse', 'Area_m2': 'Area_m2', });
lyr_PSE_AmontGers_2020_6.set('fieldAliases', {'lib_PSE': 'lib_PSE', 'Code_PSE': 'Code_PSE', 'annee_pse': 'annee_pse', 'Area_m2': 'Area_m2', });
lyr_retourCA32site_1.set('fieldImages', {'Retour': '', });
lyr_Departement_32_2.set('fieldImages', {'RégION': 'TextEdit', 'ID_BDCARTO': 'TextEdit', 'DépARTEMEN': 'TextEdit', 'DépARTEM0': 'TextEdit', 'DépARTEM1': 'TextEdit', 'ORDONNée_D': 'TextEdit', });
lyr_Communes_32_3.set('fieldImages', {'RégION': 'TextEdit', 'NOM_RégION': 'TextEdit', 'DépARTEMEN': 'TextEdit', 'DépARTEM0': 'TextEdit', 'ARRONDISSE': 'TextEdit', 'CANTON': 'TextEdit', 'ID_BDCARTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'COMMUNE0': 'TextEdit', 'STATUT': 'TextEdit', 'COMMUNE1': 'TextEdit', 'ORDONNée_C': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'ComCom': 'TextEdit', 'Pays': 'TextEdit', 'Nb_hab': 'TextEdit', 'Ratio_PAC': 'TextEdit', 'Pourc_bio': 'TextEdit', 'SURFACE': 'TextEdit', });
lyr_PSE_Midour_2020_4.set('fieldImages', {'lib_PSE': 'TextEdit', 'Code_PSE': 'TextEdit', 'annee_pse': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_PSE_Gelise_2020_5.set('fieldImages', {'lib_PSE': 'TextEdit', 'Code_PSE': 'TextEdit', 'commentair': 'TextEdit', 'annee_pse': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_PSE_AmontGers_2020_6.set('fieldImages', {'lib_PSE': 'TextEdit', 'Code_PSE': 'TextEdit', 'annee_pse': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_retourCA32site_1.set('fieldLabels', {'Retour': 'no label', });
lyr_Departement_32_2.set('fieldLabels', {'RégION': 'no label', 'ID_BDCARTO': 'no label', 'DépARTEMEN': 'no label', 'DépARTEM0': 'no label', 'DépARTEM1': 'no label', 'ORDONNée_D': 'no label', });
lyr_Communes_32_3.set('fieldLabels', {'RégION': 'no label', 'NOM_RégION': 'no label', 'DépARTEMEN': 'no label', 'DépARTEM0': 'no label', 'ARRONDISSE': 'no label', 'CANTON': 'no label', 'ID_BDCARTO': 'no label', 'COMMUNE': 'no label', 'COMMUNE0': 'no label', 'STATUT': 'no label', 'COMMUNE1': 'no label', 'ORDONNée_C': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'ComCom': 'no label', 'Pays': 'no label', 'Nb_hab': 'no label', 'Ratio_PAC': 'no label', 'Pourc_bio': 'no label', 'SURFACE': 'no label', });
lyr_PSE_Midour_2020_4.set('fieldLabels', {'lib_PSE': 'no label', 'Code_PSE': 'no label', 'annee_pse': 'no label', 'Area_m2': 'no label', });
lyr_PSE_Gelise_2020_5.set('fieldLabels', {'lib_PSE': 'no label', 'Code_PSE': 'no label', 'commentair': 'no label', 'annee_pse': 'no label', 'Area_m2': 'no label', });
lyr_PSE_AmontGers_2020_6.set('fieldLabels', {'lib_PSE': 'no label', 'Code_PSE': 'no label', 'annee_pse': 'no label', 'Area_m2': 'no label', });
lyr_PSE_AmontGers_2020_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});