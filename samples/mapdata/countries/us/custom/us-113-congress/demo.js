// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['us-ca-24', 0],
    ['us-id-01', 1],
    ['us-tn-02', 2],
    ['us-ne-02', 3],
    ['us-md-06', 4],
    ['us-ma-09', 5],
    ['us-wi-08', 6],
    ['us-wi-03', 7],
    ['us-mi-01', 8],
    ['us-ut-03', 9],
    ['us-az-01', 10],
    ['us-me-02', 11],
    ['us-la-03', 12],
    ['us-tx-23', 13],
    ['us-nm-02', 14],
    ['us-tn-05', 15],
    ['us-sd-00', 16],
    ['us-wy-00', 17],
    ['us-ny-23', 18],
    ['us-pa-05', 19],
    ['us-co-03', 20],
    ['us-nm-03', 21],
    ['us-tx-14', 22],
    ['us-ca-47', 23],
    ['us-ca-26', 24],
    ['us-ca-14', 25],
    ['us-fl-26', 26],
    ['us-wv-01', 27],
    ['us-pa-18', 28],
    ['us-ri-02', 29],
    ['us-ct-02', 30],
    ['us-ny-10', 31],
    ['us-tn-04', 32],
    ['us-mi-02', 33],
    ['us-mi-03', 34],
    ['us-va-10', 35],
    ['us-mn-02', 36],
    ['us-mn-06', 37],
    ['us-mn-04', 38],
    ['us-il-01', 39],
    ['us-il-05', 40],
    ['us-il-07', 41],
    ['us-il-02', 42],
    ['us-ca-33', 43],
    ['us-ca-36', 44],
    ['us-ca-31', 45],
    ['us-ca-48', 46],
    ['us-ca-46', 47],
    ['us-ar-03', 48],
    ['us-ar-02', 49],
    ['us-ca-34', 50],
    ['us-ca-30', 51],
    ['us-ca-18', 52],
    ['us-ca-20', 53],
    ['us-ca-16', 54],
    ['us-ca-22', 55],
    ['us-ca-37', 56],
    ['us-ca-43', 57],
    ['us-ca-32', 58],
    ['us-ca-35', 59],
    ['us-ca-42', 60],
    ['us-ca-49', 61],
    ['us-ca-44', 62],
    ['us-ca-15', 63],
    ['us-ca-19', 64],
    ['us-ca-10', 65],
    ['us-ia-04', 66],
    ['us-ia-02', 67],
    ['us-mn-03', 68],
    ['us-mn-05', 69],
    ['us-ca-52', 70],
    ['us-ca-25', 71],
    ['us-ca-29', 72],
    ['us-ca-07', 73],
    ['us-ca-06', 74],
    ['us-ca-39', 75],
    ['us-al-05', 76],
    ['us-ca-02', 77],
    ['us-ca-12', 78],
    ['us-ca-05', 79],
    ['us-ca-11', 80],
    ['us-ca-03', 81],
    ['us-il-04', 82],
    ['us-il-16', 83],
    ['us-in-04', 84],
    ['us-in-01', 85],
    ['us-wi-01', 86],
    ['us-il-10', 87],
    ['us-ca-50', 88],
    ['us-ca-53', 89],
    ['us-ca-08', 90],
    ['us-il-06', 91],
    ['us-il-03', 92],
    ['us-ga-04', 93],
    ['us-ga-05', 94],
    ['us-ga-13', 95],
    ['us-ga-10', 96],
    ['us-tn-03', 97],
    ['us-ca-51', 98],
    ['us-ca-28', 99],
    ['us-ga-07', 100],
    ['us-ga-09', 101],
    ['us-ga-06', 102],
    ['us-ga-14', 103],
    ['us-la-06', 104],
    ['us-la-01', 105],
    ['us-ms-04', 106],
    ['us-ar-04', 107],
    ['us-la-05', 108],
    ['us-ar-01', 109],
    ['us-in-02', 110],
    ['us-in-05', 111],
    ['us-in-09', 112],
    ['us-in-07', 113],
    ['us-in-06', 114],
    ['us-in-03', 115],
    ['us-il-11', 116],
    ['us-il-09', 117],
    ['us-il-18', 118],
    ['us-il-15', 119],
    ['us-ca-40', 120],
    ['us-ca-13', 121],
    ['us-ca-45', 122],
    ['us-ia-03', 123],
    ['us-ga-11', 124],
    ['us-ca-04', 125],
    ['us-ca-09', 126],
    ['us-tn-08', 127],
    ['us-tn-09', 128],
    ['us-ca-41', 129],
    ['us-ca-27', 130],
    ['us-ca-17', 131],
    ['us-ky-01', 132],
    ['us-ky-05', 133],
    ['us-ky-03', 134],
    ['us-ky-02', 135],
    ['us-ky-04', 136],
    ['us-il-12', 137],
    ['us-il-08', 138],
    ['us-or-04', 139],
    ['us-ca-38', 140],
    ['us-al-04', 141],
    ['us-ms-01', 142],
    ['us-fl-22', 143],
    ['us-mo-01', 144],
    ['us-mo-03', 145],
    ['us-mo-08', 146],
    ['us-al-07', 147],
    ['us-al-06', 148],
    ['us-al-01', 149],
    ['us-al-02', 150],
    ['us-nj-03', 151],
    ['us-nj-05', 152],
    ['us-nj-07', 153],
    ['us-nj-02', 154],
    ['us-nj-09', 155],
    ['us-nj-06', 156],
    ['us-nj-10', 157],
    ['us-nv-02', 158],
    ['us-id-02', 159],
    ['us-ut-01', 160],
    ['us-ga-12', 161],
    ['us-sc-03', 162],
    ['us-sc-01', 163],
    ['us-sc-07', 164],
    ['us-sc-06', 165],
    ['us-ga-01', 166],
    ['us-wa-10', 167],
    ['us-wa-03', 168],
    ['us-wa-06', 169],
    ['us-oh-10', 170],
    ['us-oh-15', 171],
    ['us-oh-07', 172],
    ['us-oh-13', 173],
    ['us-oh-04', 174],
    ['us-oh-09', 175],
    ['us-oh-01', 176],
    ['us-oh-11', 177],
    ['us-oh-05', 178],
    ['us-mi-07', 179],
    ['us-mi-08', 180],
    ['us-oh-08', 181],
    ['us-oh-12', 182],
    ['us-va-01', 183],
    ['us-va-05', 184],
    ['us-va-04', 185],
    ['us-va-02', 186],
    ['us-va-09', 187],
    ['us-mi-06', 188],
    ['us-mi-04', 189],
    ['us-mi-14', 190],
    ['us-mi-13', 191],
    ['us-mi-10', 192],
    ['us-mi-05', 193],
    ['us-mi-11', 194],
    ['us-mi-09', 195],
    ['us-mi-12', 196],
    ['us-va-08', 197],
    ['us-wa-07', 198],
    ['us-wa-02', 199],
    ['us-wa-01', 200],
    ['us-wa-09', 201],
    ['us-wa-08', 202],
    ['us-nj-11', 203],
    ['us-nj-08', 204],
    ['us-co-01', 205],
    ['us-co-04', 206],
    ['us-ok-03', 207],
    ['us-co-02', 208],
    ['us-co-07', 209],
    ['us-co-06', 210],
    ['us-md-01', 211],
    ['us-pa-04', 212],
    ['us-va-11', 213],
    ['us-md-05', 214],
    ['us-md-03', 215],
    ['us-md-07', 216],
    ['us-md-02', 217],
    ['us-md-04', 218],
    ['us-md-08', 219],
    ['us-dc-98', 220],
    ['us-mo-04', 221],
    ['us-ks-03', 222],
    ['us-mo-07', 223],
    ['us-ks-02', 224],
    ['us-ma-03', 225],
    ['us-ma-05', 226],
    ['us-ma-07', 227],
    ['us-vt-00', 228],
    ['us-ma-02', 229],
    ['us-ma-04', 230],
    ['us-ma-06', 231],
    ['us-ma-08', 232],
    ['us-wv-03', 233],
    ['us-oh-06', 234],
    ['us-il-17', 235],
    ['us-wi-02', 236],
    ['us-wi-04', 237],
    ['us-wi-07', 238],
    ['us-wi-06', 239],
    ['us-nc-01', 240],
    ['us-sc-04', 241],
    ['us-nc-10', 242],
    ['us-nc-11', 243],
    ['us-sc-05', 244],
    ['us-nc-08', 245],
    ['us-nc-06', 246],
    ['us-nc-02', 247],
    ['us-nc-12', 248],
    ['us-nh-01', 249],
    ['us-nh-02', 250],
    ['us-ks-04', 251],
    ['us-ok-01', 252],
    ['us-de-00', 253],
    ['us-pa-01', 254],
    ['us-pa-13', 255],
    ['us-nj-01', 256],
    ['us-pa-07', 257],
    ['us-pa-02', 258],
    ['us-pa-03', 259],
    ['us-pa-10', 260],
    ['us-ny-22', 261],
    ['us-pa-06', 262],
    ['us-pa-16', 263],
    ['us-pa-08', 264],
    ['us-pa-09', 265],
    ['us-pa-15', 266],
    ['us-pa-12', 267],
    ['us-nj-12', 268],
    ['us-nj-04', 269],
    ['us-fl-08', 270],
    ['us-fl-17', 271],
    ['us-fl-09', 272],
    ['us-fl-07', 273],
    ['us-fl-27', 274],
    ['us-fl-14', 275],
    ['us-fl-13', 276],
    ['us-fl-24', 277],
    ['us-fl-16', 278],
    ['us-fl-11', 279],
    ['us-fl-15', 280],
    ['us-fl-23', 281],
    ['us-fl-06', 282],
    ['us-fl-12', 283],
    ['us-fl-18', 284],
    ['us-ga-08', 285],
    ['us-fl-02', 286],
    ['us-fl-20', 287],
    ['us-fl-25', 288],
    ['us-fl-19', 289],
    ['us-fl-03', 290],
    ['us-fl-10', 291],
    ['us-az-03', 292],
    ['us-az-05', 293],
    ['us-az-07', 294],
    ['us-az-06', 295],
    ['us-az-09', 296],
    ['us-ut-02', 297],
    ['us-az-04', 298],
    ['us-az-08', 299],
    ['us-tx-06', 300],
    ['us-tx-17', 301],
    ['us-tx-16', 302],
    ['us-tx-27', 303],
    ['us-tx-15', 304],
    ['us-tx-24', 305],
    ['us-tx-30', 306],
    ['us-tx-02', 307],
    ['us-tx-29', 308],
    ['us-tx-32', 309],
    ['us-tx-20', 310],
    ['us-tx-21', 311],
    ['us-tx-03', 312],
    ['us-tx-31', 313],
    ['us-tx-10', 314],
    ['us-ok-04', 315],
    ['us-tx-04', 316],
    ['us-ok-02', 317],
    ['us-la-04', 318],
    ['us-tx-25', 319],
    ['us-tx-35', 320],
    ['us-tx-28', 321],
    ['us-tx-11', 322],
    ['us-tx-13', 323],
    ['us-tx-26', 324],
    ['us-tx-07', 325],
    ['us-tx-22', 326],
    ['us-tx-36', 327],
    ['us-tx-09', 328],
    ['us-tx-18', 329],
    ['us-ri-01', 330],
    ['us-ma-01', 331],
    ['us-ct-01', 332],
    ['us-ct-05', 333],
    ['us-ct-03', 334],
    ['us-ct-04', 335],
    ['us-ny-03', 336],
    ['us-mt-00', 337],
    ['us-ny-01', 338],
    ['us-ny-27', 339],
    ['us-ny-25', 340],
    ['us-ny-14', 341],
    ['us-ny-06', 342],
    ['us-ny-07', 343],
    ['us-ny-05', 344],
    ['us-ny-24', 345],
    ['us-ny-16', 346],
    ['us-ny-17', 347],
    ['us-ny-11', 348],
    ['us-ny-15', 349],
    ['us-ny-08', 350],
    ['us-ny-12', 351],
    ['us-ny-18', 352],
    ['us-ny-02', 353],
    ['us-ny-04', 354],
    ['us-ny-13', 355],
    ['us-ny-09', 356],
    ['us-ny-21', 357],
    ['us-ny-19', 358],
    ['us-mn-07', 359],
    ['us-ne-01', 360],
    ['us-ne-03', 361],
    ['us-il-14', 362],
    ['us-or-01', 363],
    ['us-or-03', 364],
    ['us-tn-07', 365],
    ['us-nc-05', 366],
    ['us-tn-01', 367],
    ['us-il-13', 368],
    ['us-ga-03', 369],
    ['us-ca-01', 370],
    ['us-tn-06', 371],
    ['us-ga-02', 372],
    ['us-al-03', 373],
    ['us-mo-05', 374],
    ['us-mo-06', 375],
    ['us-nv-04', 376],
    ['us-nv-03', 377],
    ['us-nv-01', 378],
    ['us-sc-02', 379],
    ['us-oh-16', 380],
    ['us-oh-14', 381],
    ['us-oh-03', 382],
    ['us-va-03', 383],
    ['us-va-07', 384],
    ['us-va-06', 385],
    ['us-wa-04', 386],
    ['us-wi-05', 387],
    ['us-nc-07', 388],
    ['us-nc-04', 389],
    ['us-nc-13', 390],
    ['us-nc-09', 391],
    ['us-ok-05', 392],
    ['us-pa-17', 393],
    ['us-pa-14', 394],
    ['us-pa-11', 395],
    ['us-tx-19', 396],
    ['us-tx-08', 397],
    ['us-tx-01', 398],
    ['us-tx-33', 399],
    ['us-tx-12', 400],
    ['us-ny-26', 401],
    ['us-nc-03', 402],
    ['us-mn-08', 403],
    ['us-me-01', 404],
    ['us-tx-34', 405],
    ['us-mn-01', 406],
    ['us-ca-23', 407],
    ['us-oh-02', 408],
    ['us-fl-21', 409],
    ['us-fl-04', 410],
    ['us-fl-05', 411],
    ['us-az-02', 412],
    ['us-tx-05', 413],
    ['us-in-08', 414],
    ['us-la-02', 415],
    ['us-fl-01', 416],
    ['us-ms-03', 417],
    ['us-wv-02', 418],
    ['us-or-05', 419],
    ['us-nd-00', 420],
    ['us-ia-01', 421],
    ['us-wa-05', 422],
    ['us-ks-01', 423],
    ['us-ms-02', 424],
    ['us-or-02', 425],
    ['us-mo-02', 426],
    ['us-co-05', 427],
    ['us-ny-20', 428],
    ['us-nm-01', 429],
    ['us-ca-21', 430],
    ['us-ky-06', 431],
    ['us-ut-04', 432],
    ['undefined', 433],
    ['us-hi-02', 434],
    ['us-hi-01', 435],
    ['us-ak-00', 436],
    ['undefined', 437]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/custom/us-113-congress'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/custom/us-113-congress.js">United States of America, congressional districts (113th)</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-113-congress'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
});
