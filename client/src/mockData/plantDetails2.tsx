// Mock data to verify that Modifier "indoor=0" references a falsey value for being indoor 
// indoor=1 means plant will be indoor (truthy value)

const mockPlantDetail2 = {
  "id": 5,
  "common_name": "Fraser Fir",
  "scientific_name": [ // Want
      "Abies fraseri"
  ],
  "other_name": [
      "Southern Fir"
  ],
  "family": "Pinaceae",
  "origin": [   // Want
      "Southeastern United States"
  ],
  "type": "tree",   // Want
  "dimension": "Height:  35 feet",
  "dimensions": {
      "type": "Height",
      "min_value": 35,
      "max_value": 35,
      "unit": "feet"
  },
  "cycle": "Perennial",
  "attracts": [],
  "propagation": [
      "Seed Propagation",
      "Seed Propagation",
      "Seed Propagation",
      "Cutting",
      "Grafting Propagation",
      "Layering Propagation",
      "Tissue Culture"
  ],
  "hardiness": {
      "min": "6",
      "max": "6"
  },
  "hardiness_location": {
      "full_url": "https://perenual.com/api/hardiness-map?species_id=5&size=og&key=sk-4MQn656f96f3d272a3341",
      "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=5&size=og&key=sk-4MQn656f96f3d272a3341'></iframe>"
  },
  "watering": "Frequent",    // Want
  "depth_water_requirement": [],
  "volume_water_requirement": [],
  "watering_period": null,
  "watering_general_benchmark": {  //  Create a prompt for this
      "value": "6-12",
      "unit": "days"
  },
  "plant_anatomy": [  // Helps describe plant visually
      {
          "part": "leaves",
          "color": [
              "dark-green"
          ]
      },
      {
          "part": "cones",
          "color": [
              "light-green"
          ]
      },
      {
          "part": "branches",
          "color": [
              "silver"
          ]
      }
  ],
  "sunlight": [  // Want
      "full sun",
      "part shade",
      "filtered shade"
  ],
  "pruning_month": [   // Want
      "February",
      "March",
      "April",
      "June",
      "July",
      "August"
  ],
  "pruning_count": [],
  "seeds": 0,
  "maintenance": "Moderate",  // Want
  "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=5&key=sk-4MQn656f96f3d272a3341",   // Takes you to an api data page. Should we share this with user????
  "soil": [   
      "Well-drained"
  ],
  "growth_rate": "Moderate",
  "drought_tolerant": false,  // Want
  "salt_tolerant": false,
  "thorny": false,   // Want
  "invasive": false,
  "tropical": false,
  "indoor": false,   // Want
  "care_level": "Medium",
  "pest_susceptibility": [
      "Aphids",
      "adelgids",
      "  Pest resistant",
      " Disease resistant "
  ],
  "pest_susceptibility_api": "Coming Soon",
  "flowers": true,   // Combine with flowers
  "flowering_season": null,
  "flower_color": "No flowers, Brown",
  "cones": true,
  "fruits": false,    // Combine with fruits
  "edible_fruit": false,
  "edible_fruit_taste_profile": "Coming Soon",
  "fruit_nutritional_value": "Coming Soon",
  "fruit_color": [],
  "harvest_season": null,
  "leaf": true,
  "leaf_color": [
      "green"
  ],
  "edible_leaf": false,
  "cuisine": false,
  "medicinal": false,   // Probably
  "poisonous_to_humans": 0,  // Want
  "poisonous_to_pets": 0,   // Want
  "description": "The Fraser Fir (Abies fraseri) is an amazing tree species with many great qualities. It is a dense evergreen conifer native to the Appalachian mountains. Its pyramidal shape and glossy dark green needles, that curve upward, make it a beautiful and popular Christmas tree. Its needles are short, soft, flat and pleasant to the touch. It has been found to be highly resistant to pests, diseases, and environmental stress. Additionally, it has superior winter hardiness and a strong wood that produces very little sap. This incredible species is perfect for a variety of evergreen applications and is guaranteed to bring a unique and beautiful look to any landscape.",   // Definitely
  "default_image": {
      "license": 4,
      "license_name": "Attribution License",
      "license_url": "https://creativecommons.org/licenses/by/2.0/",
      "original_url": "https://perenual.com/storage/species_image/5_abies_fraseri/og/36843539702_e80fc436e0_b.jpg",
      "regular_url": "https://perenual.com/storage/species_image/5_abies_fraseri/regular/36843539702_e80fc436e0_b.jpg",
      "medium_url": "https://perenual.com/storage/species_image/5_abies_fraseri/medium/36843539702_e80fc436e0_b.jpg",
      "small_url": "https://perenual.com/storage/species_image/5_abies_fraseri/small/36843539702_e80fc436e0_b.jpg",
      "thumbnail": "https://perenual.com/storage/species_image/5_abies_fraseri/thumbnail/36843539702_e80fc436e0_b.jpg"   // Want
  },
  "other_images": "Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. Im sorry"
};

export default mockPlantDetail2;