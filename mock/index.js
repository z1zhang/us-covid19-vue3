import Mock from 'mockjs'

// 设置一下模拟返回数据时间
Mock.setup({
    // timeout: '1-100'
})

const usCounty = [
    {
        "state": "Alabama",
        "county": "Autauga",
        "cases": 2285.0,
        "deaths": 114.0
    },
    {
        "state": "Alabama",
        "county": "Baldwin",
        "cases": 7138.0,
        "deaths": 172.0
    },
    {
        "state": "Alabama",
        "county": "Barbour",
        "cases": 1681.0,
        "deaths": 21.0
    },
    {
        "state": "Alabama",
        "county": "Bibb",
        "cases": 1530.0,
        "deaths": 12.0
    },
    {
        "state": "Alabama",
        "county": "Blount",
        "cases": 1446.0,
        "deaths": 3.0
    },
    {
        "state": "Alabama",
        "county": "Bullock",
        "cases": 716.0,
        "deaths": 14.0
    },
    {
        "state": "Alabama",
        "county": "Butler",
        "cases": 4037.0,
        "deaths": 103.0
    },
    {
        "state": "Alabama",
        "county": "Calhoun",
        "cases": 4195.0,
        "deaths": 97.0
    },
    {
        "state": "Alabama",
        "county": "Chambers",
        "cases": 12255.0,
        "deaths": 764.0
    },
    {
        "state": "Alabama",
        "county": "Cherokee",
        "cases": 718.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Chilton",
        "cases": 2361.0,
        "deaths": 28.0
    },
    {
        "state": "Alabama",
        "county": "Choctaw",
        "cases": 1750.0,
        "deaths": 21.0
    },
    {
        "state": "Alabama",
        "county": "Clarke",
        "cases": 1650.0,
        "deaths": 36.0
    },
    {
        "state": "Alabama",
        "county": "Clay",
        "cases": 923.0,
        "deaths": 33.0
    },
    {
        "state": "Alabama",
        "county": "Cleburne",
        "cases": 597.0,
        "deaths": 31.0
    },
    {
        "state": "Alabama",
        "county": "Coffee",
        "cases": 4244.0,
        "deaths": 11.0
    },
    {
        "state": "Alabama",
        "county": "Colbert",
        "cases": 1662.0,
        "deaths": 70.0
    },
    {
        "state": "Alabama",
        "county": "Conecuh",
        "cases": 439.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Coosa",
        "cases": 1175.0,
        "deaths": 37.0
    },
    {
        "state": "Alabama",
        "county": "Covington",
        "cases": 1536.0,
        "deaths": 28.0
    },
    {
        "state": "Alabama",
        "county": "Crenshaw",
        "cases": 918.0,
        "deaths": 11.0
    },
    {
        "state": "Alabama",
        "county": "Cullman",
        "cases": 2357.0,
        "deaths": 17.0
    },
    {
        "state": "Alabama",
        "county": "Dale",
        "cases": 1265.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Dallas",
        "cases": 2602.0,
        "deaths": 93.0
    },
    {
        "state": "Alabama",
        "county": "DeKalb",
        "cases": 3877.0,
        "deaths": 68.0
    },
    {
        "state": "Alabama",
        "county": "Elmore",
        "cases": 4389.0,
        "deaths": 96.0
    },
    {
        "state": "Alabama",
        "county": "Escambia",
        "cases": 1056.0,
        "deaths": 62.0
    },
    {
        "state": "Alabama",
        "county": "Etowah",
        "cases": 5868.0,
        "deaths": 375.0
    },
    {
        "state": "Alabama",
        "county": "Fayette",
        "cases": 243.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Franklin",
        "cases": 4932.0,
        "deaths": 40.0
    },
    {
        "state": "Alabama",
        "county": "Geneva",
        "cases": 372.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Greene",
        "cases": 2101.0,
        "deaths": 57.0
    },
    {
        "state": "Alabama",
        "county": "Hale",
        "cases": 1969.0,
        "deaths": 57.0
    },
    {
        "state": "Alabama",
        "county": "Henry",
        "cases": 1000.0,
        "deaths": 26.0
    },
    {
        "state": "Alabama",
        "county": "Houston",
        "cases": 3714.0,
        "deaths": 137.0
    },
    {
        "state": "Alabama",
        "county": "Jackson",
        "cases": 2049.0,
        "deaths": 97.0
    },
    {
        "state": "Alabama",
        "county": "Jefferson",
        "cases": 42367.0,
        "deaths": 1808.0
    },
    {
        "state": "Alabama",
        "county": "Lamar",
        "cases": 475.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Lauderdale",
        "cases": 2453.0,
        "deaths": 129.0
    },
    {
        "state": "Alabama",
        "county": "Lawrence",
        "cases": 716.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Lee",
        "cases": 16298.0,
        "deaths": 959.0
    },
    {
        "state": "Alabama",
        "county": "Limestone",
        "cases": 2290.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Lowndes",
        "cases": 2625.0,
        "deaths": 117.0
    },
    {
        "state": "Alabama",
        "county": "Macon",
        "cases": 1479.0,
        "deaths": 80.0
    },
    {
        "state": "Alabama",
        "county": "Madison",
        "cases": 10858.0,
        "deaths": 175.0
    },
    {
        "state": "Alabama",
        "county": "Marengo",
        "cases": 2344.0,
        "deaths": 126.0
    },
    {
        "state": "Alabama",
        "county": "Marion",
        "cases": 3350.0,
        "deaths": 263.0
    },
    {
        "state": "Alabama",
        "county": "Marshall",
        "cases": 14209.0,
        "deaths": 239.0
    },
    {
        "state": "Alabama",
        "county": "Mobile",
        "cases": 44239.0,
        "deaths": 2331.0
    },
    {
        "state": "Alabama",
        "county": "Monroe",
        "cases": 538.0,
        "deaths": 49.0
    },
    {
        "state": "Alabama",
        "county": "Montgomery",
        "cases": 17256.0,
        "deaths": 383.0
    },
    {
        "state": "Alabama",
        "county": "Morgan",
        "cases": 3182.0,
        "deaths": 8.0
    },
    {
        "state": "Alabama",
        "county": "Perry",
        "cases": 505.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Pickens",
        "cases": 2152.0,
        "deaths": 53.0
    },
    {
        "state": "Alabama",
        "county": "Pike",
        "cases": 2779.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Randolph",
        "cases": 3117.0,
        "deaths": 203.0
    },
    {
        "state": "Alabama",
        "county": "Russell",
        "cases": 2500.0,
        "deaths": 0.0
    },
    {
        "state": "Alabama",
        "county": "Shelby",
        "cases": 14365.0,
        "deaths": 512.0
    },
    {
        "state": "Alabama",
        "county": "St. Clair",
        "cases": 3072.0,
        "deaths": 14.0
    },
    {
        "state": "Alabama",
        "county": "Sumter",
        "cases": 2870.0,
        "deaths": 85.0
    },
    {
        "state": "Alabama",
        "county": "Talladega",
        "cases": 2560.0,
        "deaths": 66.0
    },
    {
        "state": "Alabama",
        "county": "Tallapoosa",
        "cases": 10624.0,
        "deaths": 1028.0
    },
    {
        "state": "Alabama",
        "county": "Tuscaloosa",
        "cases": 9442.0,
        "deaths": 104.0
    },
    {
        "state": "Alabama",
        "county": "Walker",
        "cases": 4599.0,
        "deaths": 1.0
    },
    {
        "state": "Alabama",
        "county": "Washington",
        "cases": 1419.0,
        "deaths": 92.0
    },
    {
        "state": "Alabama",
        "county": "Wilcox",
        "cases": 2619.0,
        "deaths": 92.0
    },
    {
        "state": "Alabama",
        "county": "Winston",
        "cases": 673.0,
        "deaths": 6.0
    },
    {
        "state": "Alaska",
        "county": "Anchorage",
        "cases": 8097.0,
        "deaths": 193.0
    },
    {
        "state": "Alaska",
        "county": "Bethel Census Area",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Fairbanks North Star Borough",
        "cases": 3953.0,
        "deaths": 85.0
    },
    {
        "state": "Alaska",
        "county": "Juneau City and Borough",
        "cases": 1170.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Kenai Peninsula Borough",
        "cases": 934.0,
        "deaths": 14.0
    },
    {
        "state": "Alaska",
        "county": "Ketchikan Gateway Borough",
        "cases": 871.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Kodiak Island Borough",
        "cases": 34.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Matanuska-Susitna Borough",
        "cases": 824.0,
        "deaths": 36.0
    },
    {
        "state": "Alaska",
        "county": "Nome Census Area",
        "cases": 35.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Petersburg Borough",
        "cases": 97.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Prince of Wales-Hyder Census Area",
        "cases": 75.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Sitka City and Borough",
        "cases": 24.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Southeast Fairbanks Census Area",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Unknown",
        "cases": 2.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Valdez-Cordova Census Area",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Alaska",
        "county": "Yukon-Koyukuk Census Area",
        "cases": 48.0,
        "deaths": 0.0
    },
    {
        "state": "Arizona",
        "county": "Apache",
        "cases": 18893.0,
        "deaths": 313.0
    },
    {
        "state": "Arizona",
        "county": "Cochise",
        "cases": 1432.0,
        "deaths": 12.0
    },
    {
        "state": "Arizona",
        "county": "Coconino",
        "cases": 22223.0,
        "deaths": 1793.0
    },
    {
        "state": "Arizona",
        "county": "Gila",
        "cases": 534.0,
        "deaths": 12.0
    },
    {
        "state": "Arizona",
        "county": "Graham",
        "cases": 508.0,
        "deaths": 0.0
    },
    {
        "state": "Arizona",
        "county": "Greenlee",
        "cases": 91.0,
        "deaths": 0.0
    },
    {
        "state": "Arizona",
        "county": "La Paz",
        "cases": 624.0,
        "deaths": 57.0
    },
    {
        "state": "Arizona",
        "county": "Maricopa",
        "cases": 184230.0,
        "deaths": 6760.0
    },
    {
        "state": "Arizona",
        "county": "Mohave",
        "cases": 5123.0,
        "deaths": 490.0
    },
    {
        "state": "Arizona",
        "county": "Navajo",
        "cases": 31801.0,
        "deaths": 975.0
    },
    {
        "state": "Arizona",
        "county": "Pima",
        "cases": 53220.0,
        "deaths": 3754.0
    },
    {
        "state": "Arizona",
        "county": "Pinal",
        "cases": 17864.0,
        "deaths": 541.0
    },
    {
        "state": "Arizona",
        "county": "Santa Cruz",
        "cases": 1459.0,
        "deaths": 0.0
    },
    {
        "state": "Arizona",
        "county": "Unknown",
        "cases": 0.0,
        "deaths": 50.0
    },
    {
        "state": "Arizona",
        "county": "Yavapai",
        "cases": 5465.0,
        "deaths": 96.0
    },
    {
        "state": "Arizona",
        "county": "Yuma",
        "cases": 4952.0,
        "deaths": 65.0
    },
    {
        "state": "Arkansas",
        "county": "Arkansas",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Ashley",
        "cases": 624.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Baxter",
        "cases": 237.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Benton",
        "cases": 4443.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Boone",
        "cases": 197.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Bradley",
        "cases": 457.0,
        "deaths": 31.0
    },
    {
        "state": "Arkansas",
        "county": "Carroll",
        "cases": 181.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Chicot",
        "cases": 374.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Clark",
        "cases": 1582.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Clay",
        "cases": 94.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Cleburne",
        "cases": 3934.0,
        "deaths": 206.0
    },
    {
        "state": "Arkansas",
        "county": "Cleveland",
        "cases": 531.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Columbia",
        "cases": 435.0,
        "deaths": 36.0
    },
    {
        "state": "Arkansas",
        "county": "Conway",
        "cases": 452.0,
        "deaths": 53.0
    },
    {
        "state": "Arkansas",
        "county": "Craighead",
        "cases": 3271.0,
        "deaths": 11.0
    },
    {
        "state": "Arkansas",
        "county": "Crawford",
        "cases": 249.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Crittenden",
        "cases": 7568.0,
        "deaths": 215.0
    },
    {
        "state": "Arkansas",
        "county": "Cross",
        "cases": 827.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Dallas",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Desha",
        "cases": 593.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Drew",
        "cases": 579.0,
        "deaths": 40.0
    },
    {
        "state": "Arkansas",
        "county": "Faulkner",
        "cases": 3596.0,
        "deaths": 92.0
    },
    {
        "state": "Arkansas",
        "county": "Franklin",
        "cases": 69.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Fulton",
        "cases": 60.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Garland",
        "cases": 5120.0,
        "deaths": 14.0
    },
    {
        "state": "Arkansas",
        "county": "Grant",
        "cases": 584.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Greene",
        "cases": 705.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Hempstead",
        "cases": 266.0,
        "deaths": 41.0
    },
    {
        "state": "Arkansas",
        "county": "Hot Spring",
        "cases": 741.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Howard",
        "cases": 568.0,
        "deaths": 1.0
    },
    {
        "state": "Arkansas",
        "county": "Independence",
        "cases": 544.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Izard",
        "cases": 273.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Jackson",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Jefferson",
        "cases": 8921.0,
        "deaths": 503.0
    },
    {
        "state": "Arkansas",
        "county": "Johnson",
        "cases": 1193.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Lafayette",
        "cases": 277.0,
        "deaths": 24.0
    },
    {
        "state": "Arkansas",
        "county": "Lawrence",
        "cases": 1951.0,
        "deaths": 102.0
    },
    {
        "state": "Arkansas",
        "county": "Lee",
        "cases": 197.0,
        "deaths": 36.0
    },
    {
        "state": "Arkansas",
        "county": "Lincoln",
        "cases": 25087.0,
        "deaths": 115.0
    },
    {
        "state": "Arkansas",
        "county": "Little River",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Logan",
        "cases": 121.0,
        "deaths": 1.0
    },
    {
        "state": "Arkansas",
        "county": "Lonoke",
        "cases": 1683.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Madison",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Marion",
        "cases": 40.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Miller",
        "cases": 1436.0,
        "deaths": 28.0
    },
    {
        "state": "Arkansas",
        "county": "Mississippi",
        "cases": 1105.0,
        "deaths": 1.0
    },
    {
        "state": "Arkansas",
        "county": "Monroe",
        "cases": 158.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Montgomery",
        "cases": 22.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Nevada",
        "cases": 86.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Newton",
        "cases": 111.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Ouachita",
        "cases": 290.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Perry",
        "cases": 265.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Phillips",
        "cases": 178.0,
        "deaths": 38.0
    },
    {
        "state": "Arkansas",
        "county": "Pike",
        "cases": 143.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Poinsett",
        "cases": 809.0,
        "deaths": 41.0
    },
    {
        "state": "Arkansas",
        "county": "Polk",
        "cases": 353.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Pope",
        "cases": 1900.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Prairie",
        "cases": 92.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Pulaski",
        "cases": 22293.0,
        "deaths": 742.0
    },
    {
        "state": "Arkansas",
        "county": "Randolph",
        "cases": 706.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Saline",
        "cases": 2635.0,
        "deaths": 45.0
    },
    {
        "state": "Arkansas",
        "county": "Scott",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Searcy",
        "cases": 319.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Sebastian",
        "cases": 623.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Sevier",
        "cases": 641.0,
        "deaths": 21.0
    },
    {
        "state": "Arkansas",
        "county": "Sharp",
        "cases": 443.0,
        "deaths": 22.0
    },
    {
        "state": "Arkansas",
        "county": "St. Francis",
        "cases": 5517.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Stone",
        "cases": 378.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Union",
        "cases": 2256.0,
        "deaths": 42.0
    },
    {
        "state": "Arkansas",
        "county": "Unknown",
        "cases": 5663.0,
        "deaths": 25.0
    },
    {
        "state": "Arkansas",
        "county": "Van Buren",
        "cases": 1407.0,
        "deaths": 92.0
    },
    {
        "state": "Arkansas",
        "county": "Washington",
        "cases": 3719.0,
        "deaths": 95.0
    },
    {
        "state": "Arkansas",
        "county": "White",
        "cases": 1564.0,
        "deaths": 30.0
    },
    {
        "state": "Arkansas",
        "county": "Woodruff",
        "cases": 57.0,
        "deaths": 0.0
    },
    {
        "state": "Arkansas",
        "county": "Yell",
        "cases": 241.0,
        "deaths": 16.0
    },
    {
        "state": "California",
        "county": "Alameda",
        "cases": 72774.0,
        "deaths": 2439.0
    },
    {
        "state": "California",
        "county": "Alpine",
        "cases": 80.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Amador",
        "cases": 310.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Butte",
        "cases": 857.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Calaveras",
        "cases": 548.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Colusa",
        "cases": 145.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Contra Costa",
        "cases": 39730.0,
        "deaths": 1065.0
    },
    {
        "state": "California",
        "county": "Del Norte",
        "cases": 144.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "El Dorado",
        "cases": 2187.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Fresno",
        "cases": 26582.0,
        "deaths": 365.0
    },
    {
        "state": "California",
        "county": "Glenn",
        "cases": 246.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Humboldt",
        "cases": 2847.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Imperial",
        "cases": 15664.0,
        "deaths": 314.0
    },
    {
        "state": "California",
        "county": "Inyo",
        "cases": 870.0,
        "deaths": 27.0
    },
    {
        "state": "California",
        "county": "Kern",
        "cases": 39857.0,
        "deaths": 418.0
    },
    {
        "state": "California",
        "county": "Kings",
        "cases": 6340.0,
        "deaths": 44.0
    },
    {
        "state": "California",
        "county": "Lake",
        "cases": 280.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Los Angeles",
        "cases": 983288.0,
        "deaths": 44164.0
    },
    {
        "state": "California",
        "county": "Madera",
        "cases": 2391.0,
        "deaths": 101.0
    },
    {
        "state": "California",
        "county": "Marin",
        "cases": 11355.0,
        "deaths": 566.0
    },
    {
        "state": "California",
        "county": "Mariposa",
        "cases": 282.0,
        "deaths": 5.0
    },
    {
        "state": "California",
        "county": "Mendocino",
        "cases": 471.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Merced",
        "cases": 5450.0,
        "deaths": 147.0
    },
    {
        "state": "California",
        "county": "Mono",
        "cases": 1299.0,
        "deaths": 50.0
    },
    {
        "state": "California",
        "county": "Monterey",
        "cases": 9062.0,
        "deaths": 232.0
    },
    {
        "state": "California",
        "county": "Napa",
        "cases": 2909.0,
        "deaths": 106.0
    },
    {
        "state": "California",
        "county": "Nevada",
        "cases": 1930.0,
        "deaths": 47.0
    },
    {
        "state": "California",
        "county": "Orange",
        "cases": 113636.0,
        "deaths": 2173.0
    },
    {
        "state": "California",
        "county": "Placer",
        "cases": 7423.0,
        "deaths": 363.0
    },
    {
        "state": "California",
        "county": "Plumas",
        "cases": 184.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Riverside",
        "cases": 162684.0,
        "deaths": 6246.0
    },
    {
        "state": "California",
        "county": "Sacramento",
        "cases": 47345.0,
        "deaths": 1901.0
    },
    {
        "state": "California",
        "county": "San Benito",
        "cases": 2365.0,
        "deaths": 111.0
    },
    {
        "state": "California",
        "county": "San Bernardino",
        "cases": 88109.0,
        "deaths": 3758.0
    },
    {
        "state": "California",
        "county": "San Diego",
        "cases": 162161.0,
        "deaths": 5750.0
    },
    {
        "state": "California",
        "county": "San Francisco",
        "cases": 69037.0,
        "deaths": 1138.0
    },
    {
        "state": "California",
        "county": "San Joaquin",
        "cases": 23577.0,
        "deaths": 1115.0
    },
    {
        "state": "California",
        "county": "San Luis Obispo",
        "cases": 8646.0,
        "deaths": 46.0
    },
    {
        "state": "California",
        "county": "San Mateo",
        "cases": 53921.0,
        "deaths": 2040.0
    },
    {
        "state": "California",
        "county": "Santa Barbara",
        "cases": 30729.0,
        "deaths": 301.0
    },
    {
        "state": "California",
        "county": "Santa Clara",
        "cases": 102111.0,
        "deaths": 4796.0
    },
    {
        "state": "California",
        "county": "Santa Cruz",
        "cases": 5949.0,
        "deaths": 92.0
    },
    {
        "state": "California",
        "county": "Shasta",
        "cases": 1383.0,
        "deaths": 174.0
    },
    {
        "state": "California",
        "county": "Siskiyou",
        "cases": 265.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Solano",
        "cases": 12259.0,
        "deaths": 262.0
    },
    {
        "state": "California",
        "county": "Sonoma",
        "cases": 11579.0,
        "deaths": 137.0
    },
    {
        "state": "California",
        "county": "Stanislaus",
        "cases": 15130.0,
        "deaths": 480.0
    },
    {
        "state": "California",
        "county": "Sutter",
        "cases": 1387.0,
        "deaths": 93.0
    },
    {
        "state": "California",
        "county": "Tehama",
        "cases": 52.0,
        "deaths": 24.0
    },
    {
        "state": "California",
        "county": "Trinity",
        "cases": 18.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Tulare",
        "cases": 31125.0,
        "deaths": 1485.0
    },
    {
        "state": "California",
        "county": "Tuolumne",
        "cases": 107.0,
        "deaths": 0.0
    },
    {
        "state": "California",
        "county": "Unknown",
        "cases": 23.0,
        "deaths": 1.0
    },
    {
        "state": "California",
        "county": "Ventura",
        "cases": 24714.0,
        "deaths": 774.0
    },
    {
        "state": "California",
        "county": "Yolo",
        "cases": 6752.0,
        "deaths": 614.0
    },
    {
        "state": "California",
        "county": "Yuba",
        "cases": 887.0,
        "deaths": 45.0
    },
    {
        "state": "Colorado",
        "county": "Adams",
        "cases": 67133.0,
        "deaths": 2565.0
    },
    {
        "state": "Colorado",
        "county": "Alamosa",
        "cases": 742.0,
        "deaths": 82.0
    },
    {
        "state": "Colorado",
        "county": "Arapahoe",
        "cases": 103630.0,
        "deaths": 5556.0
    },
    {
        "state": "Colorado",
        "county": "Archuleta",
        "cases": 337.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Baca",
        "cases": 514.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Bent",
        "cases": 10.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Boulder",
        "cases": 24931.0,
        "deaths": 1470.0
    },
    {
        "state": "Colorado",
        "county": "Broomfield",
        "cases": 6442.0,
        "deaths": 433.0
    },
    {
        "state": "Colorado",
        "county": "Chaffee",
        "cases": 2529.0,
        "deaths": 487.0
    },
    {
        "state": "Colorado",
        "county": "Cheyenne",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Clear Creek",
        "cases": 623.0,
        "deaths": 29.0
    },
    {
        "state": "Colorado",
        "county": "Conejos",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Costilla",
        "cases": 163.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Crowley",
        "cases": 543.0,
        "deaths": 62.0
    },
    {
        "state": "Colorado",
        "county": "Custer",
        "cases": 95.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Delta",
        "cases": 1503.0,
        "deaths": 42.0
    },
    {
        "state": "Colorado",
        "county": "Denver",
        "cases": 128241.0,
        "deaths": 6217.0
    },
    {
        "state": "Colorado",
        "county": "Douglas",
        "cases": 21921.0,
        "deaths": 955.0
    },
    {
        "state": "Colorado",
        "county": "Eagle",
        "cases": 25926.0,
        "deaths": 339.0
    },
    {
        "state": "Colorado",
        "county": "El Paso",
        "cases": 42926.0,
        "deaths": 2927.0
    },
    {
        "state": "Colorado",
        "county": "Elbert",
        "cases": 1310.0,
        "deaths": 54.0
    },
    {
        "state": "Colorado",
        "county": "Fremont",
        "cases": 770.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Garfield",
        "cases": 4114.0,
        "deaths": 92.0
    },
    {
        "state": "Colorado",
        "county": "Gilpin",
        "cases": 60.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Grand",
        "cases": 254.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Gunnison",
        "cases": 7441.0,
        "deaths": 200.0
    },
    {
        "state": "Colorado",
        "county": "Hinsdale",
        "cases": 134.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Huerfano",
        "cases": 94.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Jefferson",
        "cases": 58447.0,
        "deaths": 3027.0
    },
    {
        "state": "Colorado",
        "county": "Kit Carson",
        "cases": 825.0,
        "deaths": 67.0
    },
    {
        "state": "Colorado",
        "county": "La Plata",
        "cases": 2701.0,
        "deaths": 11.0
    },
    {
        "state": "Colorado",
        "county": "Lake",
        "cases": 668.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Larimer",
        "cases": 15759.0,
        "deaths": 742.0
    },
    {
        "state": "Colorado",
        "county": "Las Animas",
        "cases": 137.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Lincoln",
        "cases": 126.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Logan",
        "cases": 9422.0,
        "deaths": 55.0
    },
    {
        "state": "Colorado",
        "county": "Mesa",
        "cases": 1996.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Mineral",
        "cases": 102.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Moffat",
        "cases": 257.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Montezuma",
        "cases": 769.0,
        "deaths": 97.0
    },
    {
        "state": "Colorado",
        "county": "Montrose",
        "cases": 4193.0,
        "deaths": 383.0
    },
    {
        "state": "Colorado",
        "county": "Morgan",
        "cases": 13324.0,
        "deaths": 576.0
    },
    {
        "state": "Colorado",
        "county": "Otero",
        "cases": 384.0,
        "deaths": 26.0
    },
    {
        "state": "Colorado",
        "county": "Ouray",
        "cases": 226.0,
        "deaths": 41.0
    },
    {
        "state": "Colorado",
        "county": "Park",
        "cases": 497.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Phillips",
        "cases": 275.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Pitkin",
        "cases": 2888.0,
        "deaths": 107.0
    },
    {
        "state": "Colorado",
        "county": "Prowers",
        "cases": 157.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Pueblo",
        "cases": 5860.0,
        "deaths": 393.0
    },
    {
        "state": "Colorado",
        "county": "Rio Blanco",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Rio Grande",
        "cases": 339.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Routt",
        "cases": 2467.0,
        "deaths": 161.0
    },
    {
        "state": "Colorado",
        "county": "Saguache",
        "cases": 244.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "San Juan",
        "cases": 14.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "San Miguel",
        "cases": 809.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Summit",
        "cases": 5513.0,
        "deaths": 62.0
    },
    {
        "state": "Colorado",
        "county": "Teller",
        "cases": 1173.0,
        "deaths": 98.0
    },
    {
        "state": "Colorado",
        "county": "Unknown",
        "cases": 6527.0,
        "deaths": 30.0
    },
    {
        "state": "Colorado",
        "county": "Washington",
        "cases": 297.0,
        "deaths": 0.0
    },
    {
        "state": "Colorado",
        "county": "Weld",
        "cases": 69891.0,
        "deaths": 3848.0
    },
    {
        "state": "Colorado",
        "county": "Yuma",
        "cases": 317.0,
        "deaths": 0.0
    },
    {
        "state": "Connecticut",
        "county": "Fairfield",
        "cases": 463693.0,
        "deaths": 31096.0
    },
    {
        "state": "Connecticut",
        "county": "Hartford",
        "cases": 225632.0,
        "deaths": 25492.0
    },
    {
        "state": "Connecticut",
        "county": "Litchfield",
        "cases": 38121.0,
        "deaths": 3163.0
    },
    {
        "state": "Connecticut",
        "county": "Middlesex",
        "cases": 26621.0,
        "deaths": 3097.0
    },
    {
        "state": "Connecticut",
        "county": "New Haven",
        "cases": 295267.0,
        "deaths": 19885.0
    },
    {
        "state": "Connecticut",
        "county": "New London",
        "cases": 22754.0,
        "deaths": 1425.0
    },
    {
        "state": "Connecticut",
        "county": "Tolland",
        "cases": 18194.0,
        "deaths": 1587.0
    },
    {
        "state": "Connecticut",
        "county": "Unknown",
        "cases": 18551.0,
        "deaths": 134.0
    },
    {
        "state": "Connecticut",
        "county": "Windham",
        "cases": 7819.0,
        "deaths": 199.0
    },
    {
        "state": "Delaware",
        "county": "Kent",
        "cases": 30206.0,
        "deaths": 1066.0
    },
    {
        "state": "Delaware",
        "county": "New Castle",
        "cases": 75591.0,
        "deaths": 2758.0
    },
    {
        "state": "Delaware",
        "county": "Sussex",
        "cases": 84878.0,
        "deaths": 2382.0
    },
    {
        "state": "Delaware",
        "county": "Unknown",
        "cases": 1044.0,
        "deaths": 8.0
    },
    {
        "state": "District of Columbia",
        "county": "District of Columbia",
        "cases": 190158.0,
        "deaths": 8726.0
    },
    {
        "state": "Florida",
        "county": "Alachua",
        "cases": 12259.0,
        "deaths": 122.0
    },
    {
        "state": "Florida",
        "county": "Baker",
        "cases": 1016.0,
        "deaths": 117.0
    },
    {
        "state": "Florida",
        "county": "Bay",
        "cases": 2842.0,
        "deaths": 102.0
    },
    {
        "state": "Florida",
        "county": "Bradford",
        "cases": 1820.0,
        "deaths": 71.0
    },
    {
        "state": "Florida",
        "county": "Brevard",
        "cases": 11684.0,
        "deaths": 315.0
    },
    {
        "state": "Florida",
        "county": "Broward",
        "cases": 218357.0,
        "deaths": 7791.0
    },
    {
        "state": "Florida",
        "county": "Calhoun",
        "cases": 651.0,
        "deaths": 7.0
    },
    {
        "state": "Florida",
        "county": "Charlotte",
        "cases": 10034.0,
        "deaths": 857.0
    },
    {
        "state": "Florida",
        "county": "Citrus",
        "cases": 4302.0,
        "deaths": 424.0
    },
    {
        "state": "Florida",
        "county": "Clay",
        "cases": 11386.0,
        "deaths": 719.0
    },
    {
        "state": "Florida",
        "county": "Collier",
        "cases": 27788.0,
        "deaths": 797.0
    },
    {
        "state": "Florida",
        "county": "Columbia",
        "cases": 2866.0,
        "deaths": 44.0
    },
    {
        "state": "Florida",
        "county": "DeSoto",
        "cases": 1586.0,
        "deaths": 197.0
    },
    {
        "state": "Florida",
        "county": "Dixie",
        "cases": 365.0,
        "deaths": 1.0
    },
    {
        "state": "Florida",
        "county": "Duval",
        "cases": 44860.0,
        "deaths": 1008.0
    },
    {
        "state": "Florida",
        "county": "Escambia",
        "cases": 21004.0,
        "deaths": 498.0
    },
    {
        "state": "Florida",
        "county": "Flagler",
        "cases": 4901.0,
        "deaths": 118.0
    },
    {
        "state": "Florida",
        "county": "Franklin",
        "cases": 92.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Gadsden",
        "cases": 4012.0,
        "deaths": 7.0
    },
    {
        "state": "Florida",
        "county": "Gilchrist",
        "cases": 215.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Glades",
        "cases": 291.0,
        "deaths": 50.0
    },
    {
        "state": "Florida",
        "county": "Gulf",
        "cases": 49.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Hamilton",
        "cases": 1157.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Hardee",
        "cases": 834.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Hendry",
        "cases": 3906.0,
        "deaths": 154.0
    },
    {
        "state": "Florida",
        "county": "Hernando",
        "cases": 4151.0,
        "deaths": 158.0
    },
    {
        "state": "Florida",
        "county": "Highlands",
        "cases": 3643.0,
        "deaths": 302.0
    },
    {
        "state": "Florida",
        "county": "Hillsborough",
        "cases": 53585.0,
        "deaths": 1216.0
    },
    {
        "state": "Florida",
        "county": "Holmes",
        "cases": 338.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Indian River",
        "cases": 4318.0,
        "deaths": 233.0
    },
    {
        "state": "Florida",
        "county": "Jackson",
        "cases": 1719.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Jefferson",
        "cases": 1028.0,
        "deaths": 64.0
    },
    {
        "state": "Florida",
        "county": "Lafayette",
        "cases": 96.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Lake",
        "cases": 10049.0,
        "deaths": 427.0
    },
    {
        "state": "Florida",
        "county": "Lee",
        "cases": 45362.0,
        "deaths": 1987.0
    },
    {
        "state": "Florida",
        "county": "Leon",
        "cases": 9172.0,
        "deaths": 130.0
    },
    {
        "state": "Florida",
        "county": "Levy",
        "cases": 689.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Liberty",
        "cases": 2797.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Madison",
        "cases": 1840.0,
        "deaths": 74.0
    },
    {
        "state": "Florida",
        "county": "Manatee",
        "cases": 24284.0,
        "deaths": 2075.0
    },
    {
        "state": "Florida",
        "county": "Marion",
        "cases": 7152.0,
        "deaths": 172.0
    },
    {
        "state": "Florida",
        "county": "Martin",
        "cases": 9025.0,
        "deaths": 209.0
    },
    {
        "state": "Florida",
        "county": "Miami-Dade",
        "cases": 515889.0,
        "deaths": 14032.0
    },
    {
        "state": "Florida",
        "county": "Monroe",
        "cases": 3712.0,
        "deaths": 136.0
    },
    {
        "state": "Florida",
        "county": "Nassau",
        "cases": 2360.0,
        "deaths": 18.0
    },
    {
        "state": "Florida",
        "county": "Okaloosa",
        "cases": 6667.0,
        "deaths": 151.0
    },
    {
        "state": "Florida",
        "county": "Okeechobee",
        "cases": 674.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Orange",
        "cases": 61826.0,
        "deaths": 1249.0
    },
    {
        "state": "Florida",
        "county": "Osceola",
        "cases": 21966.0,
        "deaths": 401.0
    },
    {
        "state": "Florida",
        "county": "Palm Beach",
        "cases": 132087.0,
        "deaths": 7673.0
    },
    {
        "state": "Florida",
        "county": "Pasco",
        "cases": 11096.0,
        "deaths": 276.0
    },
    {
        "state": "Florida",
        "county": "Pinellas",
        "cases": 33375.0,
        "deaths": 1588.0
    },
    {
        "state": "Florida",
        "county": "Polk",
        "cases": 21146.0,
        "deaths": 975.0
    },
    {
        "state": "Florida",
        "county": "Putnam",
        "cases": 3969.0,
        "deaths": 83.0
    },
    {
        "state": "Florida",
        "county": "Santa Rosa",
        "cases": 6761.0,
        "deaths": 325.0
    },
    {
        "state": "Florida",
        "county": "Sarasota",
        "cases": 16087.0,
        "deaths": 1639.0
    },
    {
        "state": "Florida",
        "county": "Seminole",
        "cases": 16806.0,
        "deaths": 305.0
    },
    {
        "state": "Florida",
        "county": "St. Johns",
        "cases": 9881.0,
        "deaths": 186.0
    },
    {
        "state": "Florida",
        "county": "St. Lucie",
        "cases": 10619.0,
        "deaths": 827.0
    },
    {
        "state": "Florida",
        "county": "Sumter",
        "cases": 8600.0,
        "deaths": 549.0
    },
    {
        "state": "Florida",
        "county": "Suwannee",
        "cases": 5059.0,
        "deaths": 478.0
    },
    {
        "state": "Florida",
        "county": "Taylor",
        "cases": 104.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Union",
        "cases": 275.0,
        "deaths": 0.0
    },
    {
        "state": "Florida",
        "county": "Unknown",
        "cases": 1032.0,
        "deaths": 34.0
    },
    {
        "state": "Florida",
        "county": "Volusia",
        "cases": 19237.0,
        "deaths": 811.0
    },
    {
        "state": "Florida",
        "county": "Wakulla",
        "cases": 923.0,
        "deaths": 38.0
    },
    {
        "state": "Florida",
        "county": "Walton",
        "cases": 2186.0,
        "deaths": 31.0
    },
    {
        "state": "Florida",
        "county": "Washington",
        "cases": 421.0,
        "deaths": 4.0
    },
    {
        "state": "Georgia",
        "county": "Appling",
        "cases": 2503.0,
        "deaths": 216.0
    },
    {
        "state": "Georgia",
        "county": "Atkinson",
        "cases": 456.0,
        "deaths": 28.0
    },
    {
        "state": "Georgia",
        "county": "Bacon",
        "cases": 1284.0,
        "deaths": 42.0
    },
    {
        "state": "Georgia",
        "county": "Baker",
        "cases": 1016.0,
        "deaths": 100.0
    },
    {
        "state": "Georgia",
        "county": "Baldwin",
        "cases": 7978.0,
        "deaths": 305.0
    },
    {
        "state": "Georgia",
        "county": "Banks",
        "cases": 1020.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Barrow",
        "cases": 6266.0,
        "deaths": 214.0
    },
    {
        "state": "Georgia",
        "county": "Bartow",
        "cases": 15044.0,
        "deaths": 1209.0
    },
    {
        "state": "Georgia",
        "county": "Ben Hill",
        "cases": 1134.0,
        "deaths": 6.0
    },
    {
        "state": "Georgia",
        "county": "Berrien",
        "cases": 632.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Bibb",
        "cases": 11447.0,
        "deaths": 355.0
    },
    {
        "state": "Georgia",
        "county": "Bleckley",
        "cases": 660.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Brantley",
        "cases": 910.0,
        "deaths": 76.0
    },
    {
        "state": "Georgia",
        "county": "Brooks",
        "cases": 1938.0,
        "deaths": 232.0
    },
    {
        "state": "Georgia",
        "county": "Bryan",
        "cases": 2125.0,
        "deaths": 127.0
    },
    {
        "state": "Georgia",
        "county": "Bulloch",
        "cases": 1481.0,
        "deaths": 69.0
    },
    {
        "state": "Georgia",
        "county": "Burke",
        "cases": 3151.0,
        "deaths": 113.0
    },
    {
        "state": "Georgia",
        "county": "Butts",
        "cases": 5220.0,
        "deaths": 353.0
    },
    {
        "state": "Georgia",
        "county": "Calhoun",
        "cases": 3827.0,
        "deaths": 162.0
    },
    {
        "state": "Georgia",
        "county": "Camden",
        "cases": 1426.0,
        "deaths": 27.0
    },
    {
        "state": "Georgia",
        "county": "Candler",
        "cases": 308.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Carroll",
        "cases": 15556.0,
        "deaths": 558.0
    },
    {
        "state": "Georgia",
        "county": "Catoosa",
        "cases": 1818.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Charlton",
        "cases": 504.0,
        "deaths": 9.0
    },
    {
        "state": "Georgia",
        "county": "Chatham",
        "cases": 10588.0,
        "deaths": 395.0
    },
    {
        "state": "Georgia",
        "county": "Chattahoochee",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Chattooga",
        "cases": 561.0,
        "deaths": 65.0
    },
    {
        "state": "Georgia",
        "county": "Cherokee",
        "cases": 19736.0,
        "deaths": 596.0
    },
    {
        "state": "Georgia",
        "county": "Clarke",
        "cases": 6752.0,
        "deaths": 599.0
    },
    {
        "state": "Georgia",
        "county": "Clay",
        "cases": 995.0,
        "deaths": 99.0
    },
    {
        "state": "Georgia",
        "county": "Clayton",
        "cases": 31037.0,
        "deaths": 1138.0
    },
    {
        "state": "Georgia",
        "county": "Clinch",
        "cases": 645.0,
        "deaths": 5.0
    },
    {
        "state": "Georgia",
        "county": "Cobb",
        "cases": 71315.0,
        "deaths": 3754.0
    },
    {
        "state": "Georgia",
        "county": "Coffee",
        "cases": 5385.0,
        "deaths": 264.0
    },
    {
        "state": "Georgia",
        "county": "Colquitt",
        "cases": 7455.0,
        "deaths": 344.0
    },
    {
        "state": "Georgia",
        "county": "Columbia",
        "cases": 6283.0,
        "deaths": 129.0
    },
    {
        "state": "Georgia",
        "county": "Cook",
        "cases": 874.0,
        "deaths": 45.0
    },
    {
        "state": "Georgia",
        "county": "Coweta",
        "cases": 9141.0,
        "deaths": 179.0
    },
    {
        "state": "Georgia",
        "county": "Crawford",
        "cases": 607.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Crisp",
        "cases": 6385.0,
        "deaths": 148.0
    },
    {
        "state": "Georgia",
        "county": "Dade",
        "cases": 548.0,
        "deaths": 47.0
    },
    {
        "state": "Georgia",
        "county": "Dawson",
        "cases": 2555.0,
        "deaths": 51.0
    },
    {
        "state": "Georgia",
        "county": "DeKalb",
        "cases": 85838.0,
        "deaths": 1994.0
    },
    {
        "state": "Georgia",
        "county": "Decatur",
        "cases": 3374.0,
        "deaths": 57.0
    },
    {
        "state": "Georgia",
        "county": "Dodge",
        "cases": 1126.0,
        "deaths": 28.0
    },
    {
        "state": "Georgia",
        "county": "Dooly",
        "cases": 4602.0,
        "deaths": 331.0
    },
    {
        "state": "Georgia",
        "county": "Dougherty",
        "cases": 68253.0,
        "deaths": 4985.0
    },
    {
        "state": "Georgia",
        "county": "Douglas",
        "cases": 13620.0,
        "deaths": 440.0
    },
    {
        "state": "Georgia",
        "county": "Early",
        "cases": 8612.0,
        "deaths": 760.0
    },
    {
        "state": "Georgia",
        "county": "Echols",
        "cases": 261.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Effingham",
        "cases": 1472.0,
        "deaths": 45.0
    },
    {
        "state": "Georgia",
        "county": "Elbert",
        "cases": 1007.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Emanuel",
        "cases": 770.0,
        "deaths": 13.0
    },
    {
        "state": "Georgia",
        "county": "Evans",
        "cases": 148.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Fannin",
        "cases": 1122.0,
        "deaths": 24.0
    },
    {
        "state": "Georgia",
        "county": "Fayette",
        "cases": 7575.0,
        "deaths": 416.0
    },
    {
        "state": "Georgia",
        "county": "Floyd",
        "cases": 6744.0,
        "deaths": 440.0
    },
    {
        "state": "Georgia",
        "county": "Forsyth",
        "cases": 12346.0,
        "deaths": 361.0
    },
    {
        "state": "Georgia",
        "county": "Franklin",
        "cases": 798.0,
        "deaths": 20.0
    },
    {
        "state": "Georgia",
        "county": "Fulton",
        "cases": 123099.0,
        "deaths": 4826.0
    },
    {
        "state": "Georgia",
        "county": "Gilmer",
        "cases": 2315.0,
        "deaths": 2.0
    },
    {
        "state": "Georgia",
        "county": "Glascock",
        "cases": 13.0,
        "deaths": 1.0
    },
    {
        "state": "Georgia",
        "county": "Glynn",
        "cases": 2637.0,
        "deaths": 27.0
    },
    {
        "state": "Georgia",
        "county": "Gordon",
        "cases": 3970.0,
        "deaths": 451.0
    },
    {
        "state": "Georgia",
        "county": "Grady",
        "cases": 2326.0,
        "deaths": 109.0
    },
    {
        "state": "Georgia",
        "county": "Greene",
        "cases": 2135.0,
        "deaths": 120.0
    },
    {
        "state": "Georgia",
        "county": "Gwinnett",
        "cases": 74675.0,
        "deaths": 2585.0
    },
    {
        "state": "Georgia",
        "county": "Habersham",
        "cases": 9784.0,
        "deaths": 318.0
    },
    {
        "state": "Georgia",
        "county": "Hall",
        "cases": 54676.0,
        "deaths": 759.0
    },
    {
        "state": "Georgia",
        "county": "Hancock",
        "cases": 2533.0,
        "deaths": 66.0
    },
    {
        "state": "Georgia",
        "county": "Haralson",
        "cases": 1195.0,
        "deaths": 52.0
    },
    {
        "state": "Georgia",
        "county": "Harris",
        "cases": 2241.0,
        "deaths": 79.0
    },
    {
        "state": "Georgia",
        "county": "Hart",
        "cases": 476.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Heard",
        "cases": 466.0,
        "deaths": 56.0
    },
    {
        "state": "Georgia",
        "county": "Henry",
        "cases": 20862.0,
        "deaths": 493.0
    },
    {
        "state": "Georgia",
        "county": "Houston",
        "cases": 9807.0,
        "deaths": 575.0
    },
    {
        "state": "Georgia",
        "county": "Irwin",
        "cases": 767.0,
        "deaths": 28.0
    },
    {
        "state": "Georgia",
        "county": "Jackson",
        "cases": 3622.0,
        "deaths": 77.0
    },
    {
        "state": "Georgia",
        "county": "Jasper",
        "cases": 850.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Jeff Davis",
        "cases": 594.0,
        "deaths": 30.0
    },
    {
        "state": "Georgia",
        "county": "Jefferson",
        "cases": 606.0,
        "deaths": 41.0
    },
    {
        "state": "Georgia",
        "county": "Jenkins",
        "cases": 628.0,
        "deaths": 42.0
    },
    {
        "state": "Georgia",
        "county": "Johnson",
        "cases": 1972.0,
        "deaths": 66.0
    },
    {
        "state": "Georgia",
        "county": "Jones",
        "cases": 1052.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Lamar",
        "cases": 1437.0,
        "deaths": 24.0
    },
    {
        "state": "Georgia",
        "county": "Lanier",
        "cases": 363.0,
        "deaths": 49.0
    },
    {
        "state": "Georgia",
        "county": "Laurens",
        "cases": 2672.0,
        "deaths": 40.0
    },
    {
        "state": "Georgia",
        "county": "Lee",
        "cases": 14063.0,
        "deaths": 891.0
    },
    {
        "state": "Georgia",
        "county": "Liberty",
        "cases": 1548.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Lincoln",
        "cases": 505.0,
        "deaths": 2.0
    },
    {
        "state": "Georgia",
        "county": "Long",
        "cases": 165.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Lowndes",
        "cases": 6214.0,
        "deaths": 161.0
    },
    {
        "state": "Georgia",
        "county": "Lumpkin",
        "cases": 2014.0,
        "deaths": 29.0
    },
    {
        "state": "Georgia",
        "county": "Macon",
        "cases": 2783.0,
        "deaths": 107.0
    },
    {
        "state": "Georgia",
        "county": "Madison",
        "cases": 968.0,
        "deaths": 51.0
    },
    {
        "state": "Georgia",
        "county": "Marion",
        "cases": 1361.0,
        "deaths": 36.0
    },
    {
        "state": "Georgia",
        "county": "McDuffie",
        "cases": 1804.0,
        "deaths": 151.0
    },
    {
        "state": "Georgia",
        "county": "McIntosh",
        "cases": 242.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Meriwether",
        "cases": 2207.0,
        "deaths": 19.0
    },
    {
        "state": "Georgia",
        "county": "Miller",
        "cases": 1219.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Mitchell",
        "cases": 12304.0,
        "deaths": 1126.0
    },
    {
        "state": "Georgia",
        "county": "Monroe",
        "cases": 1355.0,
        "deaths": 112.0
    },
    {
        "state": "Georgia",
        "county": "Montgomery",
        "cases": 126.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Morgan",
        "cases": 1094.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Murray",
        "cases": 1402.0,
        "deaths": 19.0
    },
    {
        "state": "Georgia",
        "county": "Muscogee",
        "cases": 12487.0,
        "deaths": 330.0
    },
    {
        "state": "Georgia",
        "county": "Newton",
        "cases": 8111.0,
        "deaths": 266.0
    },
    {
        "state": "Georgia",
        "county": "Oconee",
        "cases": 2687.0,
        "deaths": 16.0
    },
    {
        "state": "Georgia",
        "county": "Oglethorpe",
        "cases": 1739.0,
        "deaths": 122.0
    },
    {
        "state": "Georgia",
        "county": "Paulding",
        "cases": 7700.0,
        "deaths": 308.0
    },
    {
        "state": "Georgia",
        "county": "Peach",
        "cases": 2078.0,
        "deaths": 97.0
    },
    {
        "state": "Georgia",
        "county": "Pickens",
        "cases": 1117.0,
        "deaths": 106.0
    },
    {
        "state": "Georgia",
        "county": "Pierce",
        "cases": 2478.0,
        "deaths": 114.0
    },
    {
        "state": "Georgia",
        "county": "Pike",
        "cases": 1519.0,
        "deaths": 65.0
    },
    {
        "state": "Georgia",
        "county": "Polk",
        "cases": 2331.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Pulaski",
        "cases": 1089.0,
        "deaths": 40.0
    },
    {
        "state": "Georgia",
        "county": "Putnam",
        "cases": 1594.0,
        "deaths": 152.0
    },
    {
        "state": "Georgia",
        "county": "Quitman",
        "cases": 211.0,
        "deaths": 35.0
    },
    {
        "state": "Georgia",
        "county": "Rabun",
        "cases": 471.0,
        "deaths": 19.0
    },
    {
        "state": "Georgia",
        "county": "Randolph",
        "cases": 6482.0,
        "deaths": 682.0
    },
    {
        "state": "Georgia",
        "county": "Richmond",
        "cases": 15073.0,
        "deaths": 542.0
    },
    {
        "state": "Georgia",
        "county": "Rockdale",
        "cases": 8026.0,
        "deaths": 266.0
    },
    {
        "state": "Georgia",
        "county": "Schley",
        "cases": 672.0,
        "deaths": 44.0
    },
    {
        "state": "Georgia",
        "county": "Screven",
        "cases": 592.0,
        "deaths": 35.0
    },
    {
        "state": "Georgia",
        "county": "Seminole",
        "cases": 1263.0,
        "deaths": 70.0
    },
    {
        "state": "Georgia",
        "county": "Spalding",
        "cases": 7653.0,
        "deaths": 391.0
    },
    {
        "state": "Georgia",
        "county": "Stephens",
        "cases": 2775.0,
        "deaths": 37.0
    },
    {
        "state": "Georgia",
        "county": "Stewart",
        "cases": 929.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Sumter",
        "cases": 15284.0,
        "deaths": 1044.0
    },
    {
        "state": "Georgia",
        "county": "Talbot",
        "cases": 910.0,
        "deaths": 43.0
    },
    {
        "state": "Georgia",
        "county": "Taliaferro",
        "cases": 17.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Tattnall",
        "cases": 351.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Taylor",
        "cases": 672.0,
        "deaths": 87.0
    },
    {
        "state": "Georgia",
        "county": "Telfair",
        "cases": 927.0,
        "deaths": 7.0
    },
    {
        "state": "Georgia",
        "county": "Terrell",
        "cases": 7519.0,
        "deaths": 793.0
    },
    {
        "state": "Georgia",
        "county": "Thomas",
        "cases": 7682.0,
        "deaths": 737.0
    },
    {
        "state": "Georgia",
        "county": "Tift",
        "cases": 5197.0,
        "deaths": 211.0
    },
    {
        "state": "Georgia",
        "county": "Toombs",
        "cases": 1250.0,
        "deaths": 121.0
    },
    {
        "state": "Georgia",
        "county": "Towns",
        "cases": 683.0,
        "deaths": 22.0
    },
    {
        "state": "Georgia",
        "county": "Treutlen",
        "cases": 141.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Troup",
        "cases": 5962.0,
        "deaths": 198.0
    },
    {
        "state": "Georgia",
        "county": "Turner",
        "cases": 2721.0,
        "deaths": 289.0
    },
    {
        "state": "Georgia",
        "county": "Twiggs",
        "cases": 296.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Union",
        "cases": 1050.0,
        "deaths": 45.0
    },
    {
        "state": "Georgia",
        "county": "Unknown",
        "cases": 37430.0,
        "deaths": 128.0
    },
    {
        "state": "Georgia",
        "county": "Upson",
        "cases": 8271.0,
        "deaths": 671.0
    },
    {
        "state": "Georgia",
        "county": "Walker",
        "cases": 1977.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Walton",
        "cases": 4567.0,
        "deaths": 188.0
    },
    {
        "state": "Georgia",
        "county": "Ware",
        "cases": 5037.0,
        "deaths": 390.0
    },
    {
        "state": "Georgia",
        "county": "Warren",
        "cases": 533.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Washington",
        "cases": 1738.0,
        "deaths": 34.0
    },
    {
        "state": "Georgia",
        "county": "Wayne",
        "cases": 443.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "Webster",
        "cases": 345.0,
        "deaths": 41.0
    },
    {
        "state": "Georgia",
        "county": "Wheeler",
        "cases": 189.0,
        "deaths": 0.0
    },
    {
        "state": "Georgia",
        "county": "White",
        "cases": 2292.0,
        "deaths": 24.0
    },
    {
        "state": "Georgia",
        "county": "Whitfield",
        "cases": 4175.0,
        "deaths": 203.0
    },
    {
        "state": "Georgia",
        "county": "Wilcox",
        "cases": 2819.0,
        "deaths": 294.0
    },
    {
        "state": "Georgia",
        "county": "Wilkes",
        "cases": 890.0,
        "deaths": 7.0
    },
    {
        "state": "Georgia",
        "county": "Wilkinson",
        "cases": 1253.0,
        "deaths": 79.0
    },
    {
        "state": "Georgia",
        "county": "Worth",
        "cases": 6526.0,
        "deaths": 436.0
    },
    {
        "state": "Guam",
        "county": "Unknown",
        "cases": 42669.0,
        "deaths": 281.0
    },
    {
        "state": "Hawaii",
        "county": "Hawaii",
        "cases": 2902.0,
        "deaths": 0.0
    },
    {
        "state": "Hawaii",
        "county": "Honolulu",
        "cases": 19193.0,
        "deaths": 390.0
    },
    {
        "state": "Hawaii",
        "county": "Kauai",
        "cases": 1064.0,
        "deaths": 0.0
    },
    {
        "state": "Hawaii",
        "county": "Maui",
        "cases": 4914.0,
        "deaths": 202.0
    },
    {
        "state": "Hawaii",
        "county": "Unknown",
        "cases": 193.0,
        "deaths": 3.0
    },
    {
        "state": "Idaho",
        "county": "Ada",
        "cases": 30688.0,
        "deaths": 660.0
    },
    {
        "state": "Idaho",
        "county": "Adams",
        "cases": 110.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Bannock",
        "cases": 441.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Bingham",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Blaine",
        "cases": 24043.0,
        "deaths": 238.0
    },
    {
        "state": "Idaho",
        "county": "Bonner",
        "cases": 182.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Bonneville",
        "cases": 1028.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Camas",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Canyon",
        "cases": 10473.0,
        "deaths": 260.0
    },
    {
        "state": "Idaho",
        "county": "Caribou",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Cassia",
        "cases": 552.0,
        "deaths": 50.0
    },
    {
        "state": "Idaho",
        "county": "Custer",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Elmore",
        "cases": 1175.0,
        "deaths": 55.0
    },
    {
        "state": "Idaho",
        "county": "Fremont",
        "cases": 115.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Gem",
        "cases": 573.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Gooding",
        "cases": 522.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Idaho",
        "cases": 149.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Jefferson",
        "cases": 242.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Jerome",
        "cases": 2365.0,
        "deaths": 83.0
    },
    {
        "state": "Idaho",
        "county": "Kootenai",
        "cases": 2801.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Latah",
        "cases": 193.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Lemhi",
        "cases": 25.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Lincoln",
        "cases": 1034.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Madison",
        "cases": 514.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Minidoka",
        "cases": 419.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Nez Perce",
        "cases": 2357.0,
        "deaths": 618.0
    },
    {
        "state": "Idaho",
        "county": "Owyhee",
        "cases": 291.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Payette",
        "cases": 626.0,
        "deaths": 56.0
    },
    {
        "state": "Idaho",
        "county": "Power",
        "cases": 94.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Teton",
        "cases": 415.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Twin Falls",
        "cases": 7868.0,
        "deaths": 417.0
    },
    {
        "state": "Idaho",
        "county": "Unknown",
        "cases": 5.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Valley",
        "cases": 112.0,
        "deaths": 0.0
    },
    {
        "state": "Idaho",
        "county": "Washington",
        "cases": 200.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Adams",
        "cases": 1495.0,
        "deaths": 19.0
    },
    {
        "state": "Illinois",
        "county": "Alexander",
        "cases": 153.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Bond",
        "cases": 289.0,
        "deaths": 34.0
    },
    {
        "state": "Illinois",
        "county": "Boone",
        "cases": 4895.0,
        "deaths": 327.0
    },
    {
        "state": "Illinois",
        "county": "Brown",
        "cases": 127.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Bureau",
        "cases": 450.0,
        "deaths": 15.0
    },
    {
        "state": "Illinois",
        "county": "Calhoun",
        "cases": 45.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Carroll",
        "cases": 396.0,
        "deaths": 80.0
    },
    {
        "state": "Illinois",
        "county": "Cass",
        "cases": 1232.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Champaign",
        "cases": 7936.0,
        "deaths": 205.0
    },
    {
        "state": "Illinois",
        "county": "Christian",
        "cases": 1348.0,
        "deaths": 220.0
    },
    {
        "state": "Illinois",
        "county": "Clark",
        "cases": 246.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Clay",
        "cases": 65.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Clinton",
        "cases": 3912.0,
        "deaths": 195.0
    },
    {
        "state": "Illinois",
        "county": "Coles",
        "cases": 1149.0,
        "deaths": 50.0
    },
    {
        "state": "Illinois",
        "county": "Cook",
        "cases": 1581156.0,
        "deaths": 66418.0
    },
    {
        "state": "Illinois",
        "county": "Crawford",
        "cases": 361.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Cumberland",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "De Witt",
        "cases": 116.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "DeKalb",
        "cases": 4881.0,
        "deaths": 57.0
    },
    {
        "state": "Illinois",
        "county": "Douglas",
        "cases": 747.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "DuPage",
        "cases": 137405.0,
        "deaths": 6931.0
    },
    {
        "state": "Illinois",
        "county": "Edwards",
        "cases": 14.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Effingham",
        "cases": 206.0,
        "deaths": 41.0
    },
    {
        "state": "Illinois",
        "county": "Fayette",
        "cases": 644.0,
        "deaths": 66.0
    },
    {
        "state": "Illinois",
        "county": "Ford",
        "cases": 408.0,
        "deaths": 43.0
    },
    {
        "state": "Illinois",
        "county": "Franklin",
        "cases": 338.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Fulton",
        "cases": 121.0,
        "deaths": 2.0
    },
    {
        "state": "Illinois",
        "county": "Gallatin",
        "cases": 81.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Greene",
        "cases": 103.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Grundy",
        "cases": 1741.0,
        "deaths": 12.0
    },
    {
        "state": "Illinois",
        "county": "Hamilton",
        "cases": 62.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Hancock",
        "cases": 273.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Hardin",
        "cases": 29.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Henderson",
        "cases": 159.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Henry",
        "cases": 1838.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Iroquois",
        "cases": 1935.0,
        "deaths": 36.0
    },
    {
        "state": "Illinois",
        "county": "Jackson",
        "cases": 4273.0,
        "deaths": 299.0
    },
    {
        "state": "Illinois",
        "county": "Jasper",
        "cases": 1368.0,
        "deaths": 151.0
    },
    {
        "state": "Illinois",
        "county": "Jefferson",
        "cases": 2664.0,
        "deaths": 345.0
    },
    {
        "state": "Illinois",
        "county": "Jersey",
        "cases": 521.0,
        "deaths": 25.0
    },
    {
        "state": "Illinois",
        "county": "Jo Daviess",
        "cases": 607.0,
        "deaths": 1.0
    },
    {
        "state": "Illinois",
        "county": "Johnson",
        "cases": 143.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Kane",
        "cases": 78469.0,
        "deaths": 2487.0
    },
    {
        "state": "Illinois",
        "county": "Kankakee",
        "cases": 18689.0,
        "deaths": 1058.0
    },
    {
        "state": "Illinois",
        "county": "Kendall",
        "cases": 12114.0,
        "deaths": 382.0
    },
    {
        "state": "Illinois",
        "county": "Knox",
        "cases": 1691.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "LaSalle",
        "cases": 2664.0,
        "deaths": 117.0
    },
    {
        "state": "Illinois",
        "county": "Lake",
        "cases": 157582.0,
        "deaths": 5334.0
    },
    {
        "state": "Illinois",
        "county": "Lawrence",
        "cases": 123.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Lee",
        "cases": 1452.0,
        "deaths": 6.0
    },
    {
        "state": "Illinois",
        "county": "Livingston",
        "cases": 921.0,
        "deaths": 30.0
    },
    {
        "state": "Illinois",
        "county": "Logan",
        "cases": 269.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Macon",
        "cases": 4211.0,
        "deaths": 439.0
    },
    {
        "state": "Illinois",
        "county": "Macoupin",
        "cases": 1230.0,
        "deaths": 15.0
    },
    {
        "state": "Illinois",
        "county": "Madison",
        "cases": 12865.0,
        "deaths": 812.0
    },
    {
        "state": "Illinois",
        "county": "Marion",
        "cases": 1287.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Marshall",
        "cases": 160.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Mason",
        "cases": 407.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Massac",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "McDonough",
        "cases": 1018.0,
        "deaths": 34.0
    },
    {
        "state": "Illinois",
        "county": "McHenry",
        "cases": 27718.0,
        "deaths": 1397.0
    },
    {
        "state": "Illinois",
        "county": "McLean",
        "cases": 4710.0,
        "deaths": 154.0
    },
    {
        "state": "Illinois",
        "county": "Menard",
        "cases": 393.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Mercer",
        "cases": 335.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Monroe",
        "cases": 2810.0,
        "deaths": 345.0
    },
    {
        "state": "Illinois",
        "county": "Montgomery",
        "cases": 1004.0,
        "deaths": 3.0
    },
    {
        "state": "Illinois",
        "county": "Morgan",
        "cases": 937.0,
        "deaths": 51.0
    },
    {
        "state": "Illinois",
        "county": "Moultrie",
        "cases": 191.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Ogle",
        "cases": 4215.0,
        "deaths": 61.0
    },
    {
        "state": "Illinois",
        "county": "Peoria",
        "cases": 3741.0,
        "deaths": 134.0
    },
    {
        "state": "Illinois",
        "county": "Perry",
        "cases": 777.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Piatt",
        "cases": 305.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Pike",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Pope",
        "cases": 12.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Pulaski",
        "cases": 763.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Putnam",
        "cases": 6.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Randolph",
        "cases": 5698.0,
        "deaths": 56.0
    },
    {
        "state": "Illinois",
        "county": "Richland",
        "cases": 102.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Rock Island",
        "cases": 14543.0,
        "deaths": 399.0
    },
    {
        "state": "Illinois",
        "county": "Saline",
        "cases": 171.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Sangamon",
        "cases": 7052.0,
        "deaths": 532.0
    },
    {
        "state": "Illinois",
        "county": "Schuyler",
        "cases": 116.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Shelby",
        "cases": 339.0,
        "deaths": 21.0
    },
    {
        "state": "Illinois",
        "county": "St. Clair",
        "cases": 20640.0,
        "deaths": 1425.0
    },
    {
        "state": "Illinois",
        "county": "Stark",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Stephenson",
        "cases": 2253.0,
        "deaths": 3.0
    },
    {
        "state": "Illinois",
        "county": "Tazewell",
        "cases": 1775.0,
        "deaths": 134.0
    },
    {
        "state": "Illinois",
        "county": "Union",
        "cases": 1469.0,
        "deaths": 30.0
    },
    {
        "state": "Illinois",
        "county": "Unknown",
        "cases": 6403.0,
        "deaths": 2.0
    },
    {
        "state": "Illinois",
        "county": "Vermilion",
        "cases": 725.0,
        "deaths": 21.0
    },
    {
        "state": "Illinois",
        "county": "Wabash",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Warren",
        "cases": 2284.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Washington",
        "cases": 438.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Wayne",
        "cases": 114.0,
        "deaths": 6.0
    },
    {
        "state": "Illinois",
        "county": "White",
        "cases": 52.0,
        "deaths": 0.0
    },
    {
        "state": "Illinois",
        "county": "Whiteside",
        "cases": 3121.0,
        "deaths": 220.0
    },
    {
        "state": "Illinois",
        "county": "Will",
        "cases": 113359.0,
        "deaths": 6271.0
    },
    {
        "state": "Illinois",
        "county": "Williamson",
        "cases": 1252.0,
        "deaths": 12.0
    },
    {
        "state": "Illinois",
        "county": "Winnebago",
        "cases": 24069.0,
        "deaths": 786.0
    },
    {
        "state": "Illinois",
        "county": "Woodford",
        "cases": 583.0,
        "deaths": 29.0
    },
    {
        "state": "Indiana",
        "county": "Adams",
        "cases": 331.0,
        "deaths": 38.0
    },
    {
        "state": "Indiana",
        "county": "Allen",
        "cases": 23200.0,
        "deaths": 1734.0
    },
    {
        "state": "Indiana",
        "county": "Bartholomew",
        "cases": 10422.0,
        "deaths": 672.0
    },
    {
        "state": "Indiana",
        "county": "Benton",
        "cases": 368.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Blackford",
        "cases": 392.0,
        "deaths": 35.0
    },
    {
        "state": "Indiana",
        "county": "Boone",
        "cases": 8363.0,
        "deaths": 865.0
    },
    {
        "state": "Indiana",
        "county": "Brown",
        "cases": 830.0,
        "deaths": 43.0
    },
    {
        "state": "Indiana",
        "county": "Carroll",
        "cases": 1458.0,
        "deaths": 48.0
    },
    {
        "state": "Indiana",
        "county": "Cass",
        "cases": 34438.0,
        "deaths": 110.0
    },
    {
        "state": "Indiana",
        "county": "Clark",
        "cases": 11782.0,
        "deaths": 815.0
    },
    {
        "state": "Indiana",
        "county": "Clay",
        "cases": 865.0,
        "deaths": 28.0
    },
    {
        "state": "Indiana",
        "county": "Clinton",
        "cases": 2279.0,
        "deaths": 64.0
    },
    {
        "state": "Indiana",
        "county": "Crawford",
        "cases": 749.0,
        "deaths": 23.0
    },
    {
        "state": "Indiana",
        "county": "Daviess",
        "cases": 1778.0,
        "deaths": 428.0
    },
    {
        "state": "Indiana",
        "county": "DeKalb",
        "cases": 752.0,
        "deaths": 58.0
    },
    {
        "state": "Indiana",
        "county": "Dearborn",
        "cases": 4662.0,
        "deaths": 380.0
    },
    {
        "state": "Indiana",
        "county": "Decatur",
        "cases": 8651.0,
        "deaths": 1057.0
    },
    {
        "state": "Indiana",
        "county": "Delaware",
        "cases": 7099.0,
        "deaths": 511.0
    },
    {
        "state": "Indiana",
        "county": "Dubois",
        "cases": 1540.0,
        "deaths": 15.0
    },
    {
        "state": "Indiana",
        "county": "Elkhart",
        "cases": 13167.0,
        "deaths": 446.0
    },
    {
        "state": "Indiana",
        "county": "Fayette",
        "cases": 1780.0,
        "deaths": 182.0
    },
    {
        "state": "Indiana",
        "county": "Floyd",
        "cases": 8105.0,
        "deaths": 742.0
    },
    {
        "state": "Indiana",
        "county": "Fountain",
        "cases": 449.0,
        "deaths": 82.0
    },
    {
        "state": "Indiana",
        "county": "Franklin",
        "cases": 4457.0,
        "deaths": 365.0
    },
    {
        "state": "Indiana",
        "county": "Fulton",
        "cases": 914.0,
        "deaths": 20.0
    },
    {
        "state": "Indiana",
        "county": "Gibson",
        "cases": 320.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Grant",
        "cases": 5178.0,
        "deaths": 429.0
    },
    {
        "state": "Indiana",
        "county": "Greene",
        "cases": 3505.0,
        "deaths": 364.0
    },
    {
        "state": "Indiana",
        "county": "Hamilton",
        "cases": 33566.0,
        "deaths": 2480.0
    },
    {
        "state": "Indiana",
        "county": "Hancock",
        "cases": 8926.0,
        "deaths": 532.0
    },
    {
        "state": "Indiana",
        "county": "Harrison",
        "cases": 5227.0,
        "deaths": 325.0
    },
    {
        "state": "Indiana",
        "county": "Hendricks",
        "cases": 29988.0,
        "deaths": 1688.0
    },
    {
        "state": "Indiana",
        "county": "Henry",
        "cases": 2312.0,
        "deaths": 55.0
    },
    {
        "state": "Indiana",
        "county": "Howard",
        "cases": 6802.0,
        "deaths": 327.0
    },
    {
        "state": "Indiana",
        "county": "Huntington",
        "cases": 469.0,
        "deaths": 76.0
    },
    {
        "state": "Indiana",
        "county": "Jackson",
        "cases": 7166.0,
        "deaths": 26.0
    },
    {
        "state": "Indiana",
        "county": "Jasper",
        "cases": 1416.0,
        "deaths": 55.0
    },
    {
        "state": "Indiana",
        "county": "Jay",
        "cases": 649.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Jefferson",
        "cases": 1110.0,
        "deaths": 6.0
    },
    {
        "state": "Indiana",
        "county": "Jennings",
        "cases": 3620.0,
        "deaths": 122.0
    },
    {
        "state": "Indiana",
        "county": "Johnson",
        "cases": 27138.0,
        "deaths": 2564.0
    },
    {
        "state": "Indiana",
        "county": "Knox",
        "cases": 846.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Kosciusko",
        "cases": 1489.0,
        "deaths": 64.0
    },
    {
        "state": "Indiana",
        "county": "LaGrange",
        "cases": 1173.0,
        "deaths": 66.0
    },
    {
        "state": "Indiana",
        "county": "LaPorte",
        "cases": 8736.0,
        "deaths": 324.0
    },
    {
        "state": "Indiana",
        "county": "Lake",
        "cases": 75786.0,
        "deaths": 3647.0
    },
    {
        "state": "Indiana",
        "county": "Lawrence",
        "cases": 4333.0,
        "deaths": 565.0
    },
    {
        "state": "Indiana",
        "county": "Madison",
        "cases": 17523.0,
        "deaths": 1998.0
    },
    {
        "state": "Indiana",
        "county": "Marion",
        "cases": 243621.0,
        "deaths": 13346.0
    },
    {
        "state": "Indiana",
        "county": "Marshall",
        "cases": 1220.0,
        "deaths": 28.0
    },
    {
        "state": "Indiana",
        "county": "Martin",
        "cases": 261.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Miami",
        "cases": 3278.0,
        "deaths": 18.0
    },
    {
        "state": "Indiana",
        "county": "Monroe",
        "cases": 5463.0,
        "deaths": 255.0
    },
    {
        "state": "Indiana",
        "county": "Montgomery",
        "cases": 3300.0,
        "deaths": 102.0
    },
    {
        "state": "Indiana",
        "county": "Morgan",
        "cases": 7117.0,
        "deaths": 313.0
    },
    {
        "state": "Indiana",
        "county": "Newton",
        "cases": 2017.0,
        "deaths": 274.0
    },
    {
        "state": "Indiana",
        "county": "Noble",
        "cases": 3316.0,
        "deaths": 415.0
    },
    {
        "state": "Indiana",
        "county": "Ohio",
        "cases": 225.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Orange",
        "cases": 3023.0,
        "deaths": 434.0
    },
    {
        "state": "Indiana",
        "county": "Owen",
        "cases": 1121.0,
        "deaths": 40.0
    },
    {
        "state": "Indiana",
        "county": "Parke",
        "cases": 561.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Perry",
        "cases": 580.0,
        "deaths": 5.0
    },
    {
        "state": "Indiana",
        "county": "Pike",
        "cases": 76.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Porter",
        "cases": 10565.0,
        "deaths": 264.0
    },
    {
        "state": "Indiana",
        "county": "Posey",
        "cases": 488.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Pulaski",
        "cases": 746.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Putnam",
        "cases": 3057.0,
        "deaths": 184.0
    },
    {
        "state": "Indiana",
        "county": "Randolph",
        "cases": 1019.0,
        "deaths": 83.0
    },
    {
        "state": "Indiana",
        "county": "Ripley",
        "cases": 4382.0,
        "deaths": 210.0
    },
    {
        "state": "Indiana",
        "county": "Rush",
        "cases": 1485.0,
        "deaths": 62.0
    },
    {
        "state": "Indiana",
        "county": "Scott",
        "cases": 2058.0,
        "deaths": 101.0
    },
    {
        "state": "Indiana",
        "county": "Shelby",
        "cases": 9255.0,
        "deaths": 591.0
    },
    {
        "state": "Indiana",
        "county": "Spencer",
        "cases": 299.0,
        "deaths": 18.0
    },
    {
        "state": "Indiana",
        "county": "St. Joseph",
        "cases": 25290.0,
        "deaths": 795.0
    },
    {
        "state": "Indiana",
        "county": "Starke",
        "cases": 717.0,
        "deaths": 55.0
    },
    {
        "state": "Indiana",
        "county": "Steuben",
        "cases": 1477.0,
        "deaths": 53.0
    },
    {
        "state": "Indiana",
        "county": "Sullivan",
        "cases": 628.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Switzerland",
        "cases": 672.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Tippecanoe",
        "cases": 6037.0,
        "deaths": 89.0
    },
    {
        "state": "Indiana",
        "county": "Tipton",
        "cases": 753.0,
        "deaths": 34.0
    },
    {
        "state": "Indiana",
        "county": "Union",
        "cases": 493.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Unknown",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Vanderburgh",
        "cases": 5727.0,
        "deaths": 60.0
    },
    {
        "state": "Indiana",
        "county": "Vermillion",
        "cases": 290.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "Vigo",
        "cases": 2987.0,
        "deaths": 235.0
    },
    {
        "state": "Indiana",
        "county": "Wabash",
        "cases": 1550.0,
        "deaths": 45.0
    },
    {
        "state": "Indiana",
        "county": "Warren",
        "cases": 414.0,
        "deaths": 50.0
    },
    {
        "state": "Indiana",
        "county": "Warrick",
        "cases": 3860.0,
        "deaths": 531.0
    },
    {
        "state": "Indiana",
        "county": "Washington",
        "cases": 1756.0,
        "deaths": 14.0
    },
    {
        "state": "Indiana",
        "county": "Wayne",
        "cases": 3399.0,
        "deaths": 126.0
    },
    {
        "state": "Indiana",
        "county": "Wells",
        "cases": 342.0,
        "deaths": 0.0
    },
    {
        "state": "Indiana",
        "county": "White",
        "cases": 2935.0,
        "deaths": 31.0
    },
    {
        "state": "Indiana",
        "county": "Whitley",
        "cases": 821.0,
        "deaths": 50.0
    },
    {
        "state": "Iowa",
        "county": "Adair",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Adams",
        "cases": 3.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Allamakee",
        "cases": 3184.0,
        "deaths": 138.0
    },
    {
        "state": "Iowa",
        "county": "Appanoose",
        "cases": 161.0,
        "deaths": 93.0
    },
    {
        "state": "Iowa",
        "county": "Audubon",
        "cases": 194.0,
        "deaths": 8.0
    },
    {
        "state": "Iowa",
        "county": "Benton",
        "cases": 1255.0,
        "deaths": 43.0
    },
    {
        "state": "Iowa",
        "county": "Black Hawk",
        "cases": 36296.0,
        "deaths": 520.0
    },
    {
        "state": "Iowa",
        "county": "Boone",
        "cases": 796.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Bremer",
        "cases": 1676.0,
        "deaths": 112.0
    },
    {
        "state": "Iowa",
        "county": "Buchanan",
        "cases": 700.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Buena Vista",
        "cases": 925.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Butler",
        "cases": 294.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Calhoun",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Carroll",
        "cases": 165.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Cass",
        "cases": 40.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Cedar",
        "cases": 1427.0,
        "deaths": 13.0
    },
    {
        "state": "Iowa",
        "county": "Cerro Gordo",
        "cases": 707.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Cherokee",
        "cases": 122.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Chickasaw",
        "cases": 186.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Clarke",
        "cases": 202.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Clay",
        "cases": 225.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Clayton",
        "cases": 661.0,
        "deaths": 57.0
    },
    {
        "state": "Iowa",
        "county": "Clinton",
        "cases": 2054.0,
        "deaths": 24.0
    },
    {
        "state": "Iowa",
        "county": "Crawford",
        "cases": 3973.0,
        "deaths": 39.0
    },
    {
        "state": "Iowa",
        "county": "Dallas",
        "cases": 15137.0,
        "deaths": 110.0
    },
    {
        "state": "Iowa",
        "county": "Davis",
        "cases": 161.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Delaware",
        "cases": 238.0,
        "deaths": 10.0
    },
    {
        "state": "Iowa",
        "county": "Des Moines",
        "cases": 872.0,
        "deaths": 24.0
    },
    {
        "state": "Iowa",
        "county": "Dickinson",
        "cases": 185.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Dubuque",
        "cases": 5271.0,
        "deaths": 180.0
    },
    {
        "state": "Iowa",
        "county": "Emmet",
        "cases": 8.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Fayette",
        "cases": 679.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Floyd",
        "cases": 101.0,
        "deaths": 10.0
    },
    {
        "state": "Iowa",
        "county": "Franklin",
        "cases": 142.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Fremont",
        "cases": 29.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Greene",
        "cases": 262.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Grundy",
        "cases": 413.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Guthrie",
        "cases": 707.0,
        "deaths": 16.0
    },
    {
        "state": "Iowa",
        "county": "Hamilton",
        "cases": 264.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Hancock",
        "cases": 178.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Hardin",
        "cases": 294.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Harrison",
        "cases": 763.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Henry",
        "cases": 1445.0,
        "deaths": 45.0
    },
    {
        "state": "Iowa",
        "county": "Howard",
        "cases": 310.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Humboldt",
        "cases": 145.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Ida",
        "cases": 30.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Iowa",
        "cases": 800.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Jackson",
        "cases": 250.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Jasper",
        "cases": 5485.0,
        "deaths": 141.0
    },
    {
        "state": "Iowa",
        "county": "Jefferson",
        "cases": 280.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Johnson",
        "cases": 18872.0,
        "deaths": 203.0
    },
    {
        "state": "Iowa",
        "county": "Jones",
        "cases": 948.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Keokuk",
        "cases": 207.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Kossuth",
        "cases": 85.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Lee",
        "cases": 396.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Linn",
        "cases": 26084.0,
        "deaths": 1743.0
    },
    {
        "state": "Iowa",
        "county": "Louisa",
        "cases": 9732.0,
        "deaths": 79.0
    },
    {
        "state": "Iowa",
        "county": "Lucas",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Lyon",
        "cases": 435.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Madison",
        "cases": 296.0,
        "deaths": 39.0
    },
    {
        "state": "Iowa",
        "county": "Mahaska",
        "cases": 590.0,
        "deaths": 30.0
    },
    {
        "state": "Iowa",
        "county": "Marion",
        "cases": 397.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Marshall",
        "cases": 17668.0,
        "deaths": 69.0
    },
    {
        "state": "Iowa",
        "county": "Mills",
        "cases": 181.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Mitchell",
        "cases": 122.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Monona",
        "cases": 440.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Monroe",
        "cases": 167.0,
        "deaths": 5.0
    },
    {
        "state": "Iowa",
        "county": "Montgomery",
        "cases": 100.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Muscatine",
        "cases": 13672.0,
        "deaths": 545.0
    },
    {
        "state": "Iowa",
        "county": "O'Brien",
        "cases": 407.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Osceola",
        "cases": 458.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Page",
        "cases": 295.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Palo Alto",
        "cases": 16.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Plymouth",
        "cases": 1228.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Pocahontas",
        "cases": 61.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Polk",
        "cases": 53435.0,
        "deaths": 1488.0
    },
    {
        "state": "Iowa",
        "county": "Pottawattamie",
        "cases": 2349.0,
        "deaths": 58.0
    },
    {
        "state": "Iowa",
        "county": "Poweshiek",
        "cases": 2043.0,
        "deaths": 150.0
    },
    {
        "state": "Iowa",
        "county": "Ringgold",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Sac",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Scott",
        "cases": 9303.0,
        "deaths": 215.0
    },
    {
        "state": "Iowa",
        "county": "Shelby",
        "cases": 547.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Sioux",
        "cases": 1613.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Story",
        "cases": 1509.0,
        "deaths": 22.0
    },
    {
        "state": "Iowa",
        "county": "Tama",
        "cases": 10323.0,
        "deaths": 352.0
    },
    {
        "state": "Iowa",
        "county": "Taylor",
        "cases": 57.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Union",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Unknown",
        "cases": 564.0,
        "deaths": 25.0
    },
    {
        "state": "Iowa",
        "county": "Van Buren",
        "cases": 362.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Wapello",
        "cases": 4458.0,
        "deaths": 14.0
    },
    {
        "state": "Iowa",
        "county": "Warren",
        "cases": 1362.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Washington",
        "cases": 5982.0,
        "deaths": 263.0
    },
    {
        "state": "Iowa",
        "county": "Wayne",
        "cases": 19.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Webster",
        "cases": 261.0,
        "deaths": 6.0
    },
    {
        "state": "Iowa",
        "county": "Winnebago",
        "cases": 126.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Winneshiek",
        "cases": 600.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Woodbury",
        "cases": 36171.0,
        "deaths": 177.0
    },
    {
        "state": "Iowa",
        "county": "Worth",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Iowa",
        "county": "Wright",
        "cases": 189.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Anderson",
        "cases": 11.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Atchison",
        "cases": 385.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Barber",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Barton",
        "cases": 539.0,
        "deaths": 14.0
    },
    {
        "state": "Kansas",
        "county": "Bourbon",
        "cases": 314.0,
        "deaths": 43.0
    },
    {
        "state": "Kansas",
        "county": "Brown",
        "cases": 30.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Butler",
        "cases": 701.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Chase",
        "cases": 61.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Chautauqua",
        "cases": 165.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Cherokee",
        "cases": 360.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Cheyenne",
        "cases": 41.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Clark",
        "cases": 276.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Clay",
        "cases": 148.0,
        "deaths": 23.0
    },
    {
        "state": "Kansas",
        "county": "Cloud",
        "cases": 153.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Coffey",
        "cases": 2160.0,
        "deaths": 270.0
    },
    {
        "state": "Kansas",
        "county": "Cowley",
        "cases": 107.0,
        "deaths": 41.0
    },
    {
        "state": "Kansas",
        "county": "Crawford",
        "cases": 317.0,
        "deaths": 51.0
    },
    {
        "state": "Kansas",
        "county": "Dickinson",
        "cases": 60.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Doniphan",
        "cases": 187.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Douglas",
        "cases": 2451.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Edwards",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Ellis",
        "cases": 272.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Ellsworth",
        "cases": 28.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Finney",
        "cases": 18924.0,
        "deaths": 92.0
    },
    {
        "state": "Kansas",
        "county": "Ford",
        "cases": 25353.0,
        "deaths": 32.0
    },
    {
        "state": "Kansas",
        "county": "Franklin",
        "cases": 839.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Geary",
        "cases": 508.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Gove",
        "cases": 54.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Grant",
        "cases": 207.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Gray",
        "cases": 178.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Greenwood",
        "cases": 104.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Hamilton",
        "cases": 172.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Harper",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Harvey",
        "cases": 340.0,
        "deaths": 5.0
    },
    {
        "state": "Kansas",
        "county": "Haskell",
        "cases": 300.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Jackson",
        "cases": 235.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Jefferson",
        "cases": 424.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Jewell",
        "cases": 158.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Johnson",
        "cases": 21552.0,
        "deaths": 1631.0
    },
    {
        "state": "Kansas",
        "county": "Kearny",
        "cases": 662.0,
        "deaths": 1.0
    },
    {
        "state": "Kansas",
        "county": "Kiowa",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Labette",
        "cases": 882.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Leavenworth",
        "cases": 19015.0,
        "deaths": 167.0
    },
    {
        "state": "Kansas",
        "county": "Linn",
        "cases": 330.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Lyon",
        "cases": 8248.0,
        "deaths": 52.0
    },
    {
        "state": "Kansas",
        "county": "Marion",
        "cases": 232.0,
        "deaths": 23.0
    },
    {
        "state": "Kansas",
        "county": "McPherson",
        "cases": 917.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Meade",
        "cases": 355.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Miami",
        "cases": 217.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Mitchell",
        "cases": 148.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Montgomery",
        "cases": 732.0,
        "deaths": 92.0
    },
    {
        "state": "Kansas",
        "county": "Morris",
        "cases": 151.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Morton",
        "cases": 110.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Nemaha",
        "cases": 26.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Neosho",
        "cases": 104.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Ness",
        "cases": 2.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Norton",
        "cases": 36.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Osage",
        "cases": 232.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Osborne",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Ottawa",
        "cases": 166.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Phillips",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Pottawatomie",
        "cases": 532.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Pratt",
        "cases": 49.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Reno",
        "cases": 1397.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Republic",
        "cases": 170.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Rice",
        "cases": 85.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Riley",
        "cases": 1879.0,
        "deaths": 8.0
    },
    {
        "state": "Kansas",
        "county": "Rooks",
        "cases": 209.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Saline",
        "cases": 837.0,
        "deaths": 82.0
    },
    {
        "state": "Kansas",
        "county": "Scott",
        "cases": 115.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Sedgwick",
        "cases": 15929.0,
        "deaths": 440.0
    },
    {
        "state": "Kansas",
        "county": "Seward",
        "cases": 16100.0,
        "deaths": 5.0
    },
    {
        "state": "Kansas",
        "county": "Shawnee",
        "cases": 5332.0,
        "deaths": 222.0
    },
    {
        "state": "Kansas",
        "county": "Sheridan",
        "cases": 58.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Sherman",
        "cases": 125.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Smith",
        "cases": 68.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Stafford",
        "cases": 52.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Stanton",
        "cases": 194.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Stevens",
        "cases": 437.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Sumner",
        "cases": 166.0,
        "deaths": 41.0
    },
    {
        "state": "Kansas",
        "county": "Unknown",
        "cases": 0.0,
        "deaths": 17.0
    },
    {
        "state": "Kansas",
        "county": "Wabaunsee",
        "cases": 627.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Wichita",
        "cases": 3.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Wilson",
        "cases": 33.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Woodson",
        "cases": 242.0,
        "deaths": 0.0
    },
    {
        "state": "Kansas",
        "county": "Wyandotte",
        "cases": 31515.0,
        "deaths": 2177.0
    },
    {
        "state": "Kentucky",
        "county": "Adair",
        "cases": 2857.0,
        "deaths": 353.0
    },
    {
        "state": "Kentucky",
        "county": "Allen",
        "cases": 652.0,
        "deaths": 13.0
    },
    {
        "state": "Kentucky",
        "county": "Anderson",
        "cases": 356.0,
        "deaths": 60.0
    },
    {
        "state": "Kentucky",
        "county": "Ballard",
        "cases": 265.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Barren",
        "cases": 720.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Bath",
        "cases": 178.0,
        "deaths": 20.0
    },
    {
        "state": "Kentucky",
        "county": "Bell",
        "cases": 2.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Boone",
        "cases": 6590.0,
        "deaths": 155.0
    },
    {
        "state": "Kentucky",
        "county": "Bourbon",
        "cases": 374.0,
        "deaths": 65.0
    },
    {
        "state": "Kentucky",
        "county": "Boyd",
        "cases": 1396.0,
        "deaths": 119.0
    },
    {
        "state": "Kentucky",
        "county": "Boyle",
        "cases": 719.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Bracken",
        "cases": 323.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Breathitt",
        "cases": 151.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Breckinridge",
        "cases": 379.0,
        "deaths": 1.0
    },
    {
        "state": "Kentucky",
        "county": "Bullitt",
        "cases": 2426.0,
        "deaths": 117.0
    },
    {
        "state": "Kentucky",
        "county": "Butler",
        "cases": 5096.0,
        "deaths": 160.0
    },
    {
        "state": "Kentucky",
        "county": "Caldwell",
        "cases": 488.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Calloway",
        "cases": 1304.0,
        "deaths": 43.0
    },
    {
        "state": "Kentucky",
        "county": "Campbell",
        "cases": 3712.0,
        "deaths": 315.0
    },
    {
        "state": "Kentucky",
        "county": "Carlisle",
        "cases": 62.0,
        "deaths": 19.0
    },
    {
        "state": "Kentucky",
        "county": "Carroll",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Carter",
        "cases": 212.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Casey",
        "cases": 42.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Christian",
        "cases": 3707.0,
        "deaths": 120.0
    },
    {
        "state": "Kentucky",
        "county": "Clark",
        "cases": 928.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Clay",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Clinton",
        "cases": 110.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Crittenden",
        "cases": 155.0,
        "deaths": 30.0
    },
    {
        "state": "Kentucky",
        "county": "Cumberland",
        "cases": 173.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Daviess",
        "cases": 8246.0,
        "deaths": 178.0
    },
    {
        "state": "Kentucky",
        "county": "Edmonson",
        "cases": 1063.0,
        "deaths": 81.0
    },
    {
        "state": "Kentucky",
        "county": "Fayette",
        "cases": 14245.0,
        "deaths": 417.0
    },
    {
        "state": "Kentucky",
        "county": "Fleming",
        "cases": 74.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Floyd",
        "cases": 410.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Franklin",
        "cases": 740.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Fulton",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Gallatin",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Garrard",
        "cases": 87.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Grant",
        "cases": 951.0,
        "deaths": 105.0
    },
    {
        "state": "Kentucky",
        "county": "Graves",
        "cases": 4133.0,
        "deaths": 423.0
    },
    {
        "state": "Kentucky",
        "county": "Grayson",
        "cases": 2344.0,
        "deaths": 139.0
    },
    {
        "state": "Kentucky",
        "county": "Green",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Greenup",
        "cases": 431.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Hancock",
        "cases": 237.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Hardin",
        "cases": 1922.0,
        "deaths": 29.0
    },
    {
        "state": "Kentucky",
        "county": "Harlan",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Harrison",
        "cases": 989.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Hart",
        "cases": 289.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Henderson",
        "cases": 2572.0,
        "deaths": 52.0
    },
    {
        "state": "Kentucky",
        "county": "Henry",
        "cases": 281.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Hickman",
        "cases": 97.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Hopkins",
        "cases": 7318.0,
        "deaths": 834.0
    },
    {
        "state": "Kentucky",
        "county": "Jackson",
        "cases": 2001.0,
        "deaths": 278.0
    },
    {
        "state": "Kentucky",
        "county": "Jefferson",
        "cases": 53659.0,
        "deaths": 3785.0
    },
    {
        "state": "Kentucky",
        "county": "Jessamine",
        "cases": 1741.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Johnson",
        "cases": 115.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Kenton",
        "cases": 11405.0,
        "deaths": 833.0
    },
    {
        "state": "Kentucky",
        "county": "Knott",
        "cases": 130.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Knox",
        "cases": 213.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Larue",
        "cases": 232.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Laurel",
        "cases": 673.0,
        "deaths": 74.0
    },
    {
        "state": "Kentucky",
        "county": "Lawrence",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Leslie",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Letcher",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Lewis",
        "cases": 173.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Lincoln",
        "cases": 184.0,
        "deaths": 35.0
    },
    {
        "state": "Kentucky",
        "county": "Livingston",
        "cases": 149.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Logan",
        "cases": 1183.0,
        "deaths": 32.0
    },
    {
        "state": "Kentucky",
        "county": "Lyon",
        "cases": 583.0,
        "deaths": 115.0
    },
    {
        "state": "Kentucky",
        "county": "Madison",
        "cases": 1330.0,
        "deaths": 45.0
    },
    {
        "state": "Kentucky",
        "county": "Magoffin",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Marion",
        "cases": 630.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Marshall",
        "cases": 1086.0,
        "deaths": 25.0
    },
    {
        "state": "Kentucky",
        "county": "Martin",
        "cases": 132.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Mason",
        "cases": 274.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "McCracken",
        "cases": 2128.0,
        "deaths": 83.0
    },
    {
        "state": "Kentucky",
        "county": "McCreary",
        "cases": 452.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "McLean",
        "cases": 511.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Meade",
        "cases": 433.0,
        "deaths": 52.0
    },
    {
        "state": "Kentucky",
        "county": "Menifee",
        "cases": 169.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Mercer",
        "cases": 460.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Metcalfe",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Monroe",
        "cases": 186.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Montgomery",
        "cases": 537.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Morgan",
        "cases": 38.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Muhlenberg",
        "cases": 9358.0,
        "deaths": 160.0
    },
    {
        "state": "Kentucky",
        "county": "Nelson",
        "cases": 932.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Nicholas",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Ohio",
        "cases": 2319.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Oldham",
        "cases": 1347.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Owen",
        "cases": 23.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Owsley",
        "cases": 80.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Pendleton",
        "cases": 223.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Perry",
        "cases": 421.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Pike",
        "cases": 492.0,
        "deaths": 70.0
    },
    {
        "state": "Kentucky",
        "county": "Powell",
        "cases": 52.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Pulaski",
        "cases": 1812.0,
        "deaths": 87.0
    },
    {
        "state": "Kentucky",
        "county": "Rockcastle",
        "cases": 474.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Rowan",
        "cases": 111.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Russell",
        "cases": 640.0,
        "deaths": 102.0
    },
    {
        "state": "Kentucky",
        "county": "Scott",
        "cases": 1345.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Shelby",
        "cases": 1512.0,
        "deaths": 100.0
    },
    {
        "state": "Kentucky",
        "county": "Simpson",
        "cases": 1161.0,
        "deaths": 86.0
    },
    {
        "state": "Kentucky",
        "county": "Spencer",
        "cases": 517.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Taylor",
        "cases": 294.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Todd",
        "cases": 478.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Trigg",
        "cases": 264.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Trimble",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Union",
        "cases": 359.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Unknown",
        "cases": 1176.0,
        "deaths": 40.0
    },
    {
        "state": "Kentucky",
        "county": "Warren",
        "cases": 14128.0,
        "deaths": 36.0
    },
    {
        "state": "Kentucky",
        "county": "Washington",
        "cases": 208.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Wayne",
        "cases": 321.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Webster",
        "cases": 903.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Whitley",
        "cases": 390.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Wolfe",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Kentucky",
        "county": "Woodford",
        "cases": 814.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Acadia",
        "cases": 6256.0,
        "deaths": 367.0
    },
    {
        "state": "Louisiana",
        "county": "Allen",
        "cases": 3936.0,
        "deaths": 394.0
    },
    {
        "state": "Louisiana",
        "county": "Ascension",
        "cases": 27332.0,
        "deaths": 1619.0
    },
    {
        "state": "Louisiana",
        "county": "Assumption",
        "cases": 7832.0,
        "deaths": 220.0
    },
    {
        "state": "Louisiana",
        "county": "Avoyelles",
        "cases": 3355.0,
        "deaths": 252.0
    },
    {
        "state": "Louisiana",
        "county": "Beauregard",
        "cases": 1778.0,
        "deaths": 115.0
    },
    {
        "state": "Louisiana",
        "county": "Bienville",
        "cases": 2862.0,
        "deaths": 529.0
    },
    {
        "state": "Louisiana",
        "county": "Bossier",
        "cases": 12447.0,
        "deaths": 657.0
    },
    {
        "state": "Louisiana",
        "county": "Caddo",
        "cases": 66679.0,
        "deaths": 4228.0
    },
    {
        "state": "Louisiana",
        "county": "Calcasieu",
        "cases": 17606.0,
        "deaths": 1141.0
    },
    {
        "state": "Louisiana",
        "county": "Caldwell",
        "cases": 1245.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Cameron",
        "cases": 113.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Catahoula",
        "cases": 2054.0,
        "deaths": 96.0
    },
    {
        "state": "Louisiana",
        "county": "Claiborne",
        "cases": 2374.0,
        "deaths": 281.0
    },
    {
        "state": "Louisiana",
        "county": "Concordia",
        "cases": 1501.0,
        "deaths": 133.0
    },
    {
        "state": "Louisiana",
        "county": "De Soto",
        "cases": 8130.0,
        "deaths": 486.0
    },
    {
        "state": "Louisiana",
        "county": "East Baton Rouge",
        "cases": 86331.0,
        "deaths": 5507.0
    },
    {
        "state": "Louisiana",
        "county": "East Carroll",
        "cases": 474.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "East Feliciana",
        "cases": 5082.0,
        "deaths": 535.0
    },
    {
        "state": "Louisiana",
        "county": "Evangeline",
        "cases": 2357.0,
        "deaths": 20.0
    },
    {
        "state": "Louisiana",
        "county": "Franklin",
        "cases": 5767.0,
        "deaths": 142.0
    },
    {
        "state": "Louisiana",
        "county": "Grant",
        "cases": 670.0,
        "deaths": 8.0
    },
    {
        "state": "Louisiana",
        "county": "Iberia",
        "cases": 10686.0,
        "deaths": 767.0
    },
    {
        "state": "Louisiana",
        "county": "Iberville",
        "cases": 17412.0,
        "deaths": 1175.0
    },
    {
        "state": "Louisiana",
        "county": "Jackson",
        "cases": 1555.0,
        "deaths": 111.0
    },
    {
        "state": "Louisiana",
        "county": "Jefferson",
        "cases": 279804.0,
        "deaths": 14561.0
    },
    {
        "state": "Louisiana",
        "county": "Jefferson Davis",
        "cases": 2560.0,
        "deaths": 217.0
    },
    {
        "state": "Louisiana",
        "county": "LaSalle",
        "cases": 990.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Lafayette",
        "cases": 21077.0,
        "deaths": 811.0
    },
    {
        "state": "Louisiana",
        "county": "Lafourche",
        "cases": 27790.0,
        "deaths": 1729.0
    },
    {
        "state": "Louisiana",
        "county": "Lincoln",
        "cases": 3412.0,
        "deaths": 266.0
    },
    {
        "state": "Louisiana",
        "county": "Livingston",
        "cases": 9418.0,
        "deaths": 576.0
    },
    {
        "state": "Louisiana",
        "county": "Madison",
        "cases": 378.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Morehouse",
        "cases": 2277.0,
        "deaths": 153.0
    },
    {
        "state": "Louisiana",
        "county": "Natchitoches",
        "cases": 3186.0,
        "deaths": 188.0
    },
    {
        "state": "Louisiana",
        "county": "Orleans",
        "cases": 302654.0,
        "deaths": 18059.0
    },
    {
        "state": "Louisiana",
        "county": "Ouachita",
        "cases": 28835.0,
        "deaths": 774.0
    },
    {
        "state": "Louisiana",
        "county": "Plaquemines",
        "cases": 7856.0,
        "deaths": 656.0
    },
    {
        "state": "Louisiana",
        "county": "Pointe Coupee",
        "cases": 4227.0,
        "deaths": 495.0
    },
    {
        "state": "Louisiana",
        "county": "Rapides",
        "cases": 12629.0,
        "deaths": 429.0
    },
    {
        "state": "Louisiana",
        "county": "Red River",
        "cases": 1097.0,
        "deaths": 183.0
    },
    {
        "state": "Louisiana",
        "county": "Richland",
        "cases": 2641.0,
        "deaths": 16.0
    },
    {
        "state": "Louisiana",
        "county": "Sabine",
        "cases": 723.0,
        "deaths": 15.0
    },
    {
        "state": "Louisiana",
        "county": "St. Bernard",
        "cases": 20756.0,
        "deaths": 719.0
    },
    {
        "state": "Louisiana",
        "county": "St. Charles",
        "cases": 24281.0,
        "deaths": 1563.0
    },
    {
        "state": "Louisiana",
        "county": "St. Helena",
        "cases": 1148.0,
        "deaths": 34.0
    },
    {
        "state": "Louisiana",
        "county": "St. James",
        "cases": 11378.0,
        "deaths": 789.0
    },
    {
        "state": "Louisiana",
        "county": "St. John the Baptist",
        "cases": 32594.0,
        "deaths": 2819.0
    },
    {
        "state": "Louisiana",
        "county": "St. Landry",
        "cases": 7629.0,
        "deaths": 1467.0
    },
    {
        "state": "Louisiana",
        "county": "St. Martin",
        "cases": 9830.0,
        "deaths": 687.0
    },
    {
        "state": "Louisiana",
        "county": "St. Mary",
        "cases": 8363.0,
        "deaths": 743.0
    },
    {
        "state": "Louisiana",
        "county": "St. Tammany",
        "cases": 55249.0,
        "deaths": 4176.0
    },
    {
        "state": "Louisiana",
        "county": "Tangipahoa",
        "cases": 23550.0,
        "deaths": 888.0
    },
    {
        "state": "Louisiana",
        "county": "Tensas",
        "cases": 99.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "Terrebonne",
        "cases": 18320.0,
        "deaths": 1247.0
    },
    {
        "state": "Louisiana",
        "county": "Union",
        "cases": 5367.0,
        "deaths": 295.0
    },
    {
        "state": "Louisiana",
        "county": "Unknown",
        "cases": 3119.0,
        "deaths": 182.0
    },
    {
        "state": "Louisiana",
        "county": "Vermilion",
        "cases": 1595.0,
        "deaths": 72.0
    },
    {
        "state": "Louisiana",
        "county": "Vernon",
        "cases": 752.0,
        "deaths": 61.0
    },
    {
        "state": "Louisiana",
        "county": "Washington",
        "cases": 11310.0,
        "deaths": 793.0
    },
    {
        "state": "Louisiana",
        "county": "Webster",
        "cases": 3957.0,
        "deaths": 182.0
    },
    {
        "state": "Louisiana",
        "county": "West Baton Rouge",
        "cases": 4633.0,
        "deaths": 799.0
    },
    {
        "state": "Louisiana",
        "county": "West Carroll",
        "cases": 221.0,
        "deaths": 0.0
    },
    {
        "state": "Louisiana",
        "county": "West Feliciana",
        "cases": 5075.0,
        "deaths": 133.0
    },
    {
        "state": "Louisiana",
        "county": "Winn",
        "cases": 1527.0,
        "deaths": 87.0
    },
    {
        "state": "Maine",
        "county": "Androscoggin",
        "cases": 2719.0,
        "deaths": 60.0
    },
    {
        "state": "Maine",
        "county": "Aroostook",
        "cases": 188.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Cumberland",
        "cases": 24494.0,
        "deaths": 1050.0
    },
    {
        "state": "Maine",
        "county": "Franklin",
        "cases": 965.0,
        "deaths": 25.0
    },
    {
        "state": "Maine",
        "county": "Hancock",
        "cases": 355.0,
        "deaths": 12.0
    },
    {
        "state": "Maine",
        "county": "Kennebec",
        "cases": 4223.0,
        "deaths": 232.0
    },
    {
        "state": "Maine",
        "county": "Knox",
        "cases": 708.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Lincoln",
        "cases": 677.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Oxford",
        "cases": 779.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Penobscot",
        "cases": 2926.0,
        "deaths": 6.0
    },
    {
        "state": "Maine",
        "county": "Piscataquis",
        "cases": 31.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Sagadahoc",
        "cases": 922.0,
        "deaths": 4.0
    },
    {
        "state": "Maine",
        "county": "Somerset",
        "cases": 667.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "Unknown",
        "cases": 229.0,
        "deaths": 2.0
    },
    {
        "state": "Maine",
        "county": "Waldo",
        "cases": 1833.0,
        "deaths": 406.0
    },
    {
        "state": "Maine",
        "county": "Washington",
        "cases": 82.0,
        "deaths": 0.0
    },
    {
        "state": "Maine",
        "county": "York",
        "cases": 9789.0,
        "deaths": 279.0
    },
    {
        "state": "Maryland",
        "county": "Allegany",
        "cases": 3946.0,
        "deaths": 274.0
    },
    {
        "state": "Maryland",
        "county": "Anne Arundel",
        "cases": 73167.0,
        "deaths": 3409.0
    },
    {
        "state": "Maryland",
        "county": "Baltimore",
        "cases": 121505.0,
        "deaths": 5050.0
    },
    {
        "state": "Maryland",
        "county": "Baltimore city",
        "cases": 94371.0,
        "deaths": 4395.0
    },
    {
        "state": "Maryland",
        "county": "Calvert",
        "cases": 6710.0,
        "deaths": 316.0
    },
    {
        "state": "Maryland",
        "county": "Caroline",
        "cases": 3622.0,
        "deaths": 0.0
    },
    {
        "state": "Maryland",
        "county": "Carroll",
        "cases": 19397.0,
        "deaths": 1984.0
    },
    {
        "state": "Maryland",
        "county": "Cecil",
        "cases": 7657.0,
        "deaths": 344.0
    },
    {
        "state": "Maryland",
        "county": "Charles",
        "cases": 23649.0,
        "deaths": 1544.0
    },
    {
        "state": "Maryland",
        "county": "Dorchester",
        "cases": 2343.0,
        "deaths": 66.0
    },
    {
        "state": "Maryland",
        "county": "Frederick",
        "cases": 37696.0,
        "deaths": 2120.0
    },
    {
        "state": "Maryland",
        "county": "Garrett",
        "cases": 244.0,
        "deaths": 0.0
    },
    {
        "state": "Maryland",
        "county": "Harford",
        "cases": 16980.0,
        "deaths": 614.0
    },
    {
        "state": "Maryland",
        "county": "Howard",
        "cases": 36788.0,
        "deaths": 898.0
    },
    {
        "state": "Maryland",
        "county": "Kent",
        "cases": 2972.0,
        "deaths": 232.0
    },
    {
        "state": "Maryland",
        "county": "Montgomery",
        "cases": 194921.0,
        "deaths": 9932.0
    },
    {
        "state": "Maryland",
        "county": "Prince George's",
        "cases": 264678.0,
        "deaths": 9517.0
    },
    {
        "state": "Maryland",
        "county": "Queen Anne's",
        "cases": 2488.0,
        "deaths": 208.0
    },
    {
        "state": "Maryland",
        "county": "Somerset",
        "cases": 1148.0,
        "deaths": 1.0
    },
    {
        "state": "Maryland",
        "county": "St. Mary's",
        "cases": 7229.0,
        "deaths": 232.0
    },
    {
        "state": "Maryland",
        "county": "Talbot",
        "cases": 1616.0,
        "deaths": 46.0
    },
    {
        "state": "Maryland",
        "county": "Unknown",
        "cases": 347.0,
        "deaths": 3259.0
    },
    {
        "state": "Maryland",
        "county": "Washington",
        "cases": 8390.0,
        "deaths": 190.0
    },
    {
        "state": "Maryland",
        "county": "Wicomico",
        "cases": 15849.0,
        "deaths": 355.0
    },
    {
        "state": "Maryland",
        "county": "Worcester",
        "cases": 2928.0,
        "deaths": 82.0
    },
    {
        "state": "Massachusetts",
        "county": "Barnstable",
        "cases": 37885.0,
        "deaths": 1923.0
    },
    {
        "state": "Massachusetts",
        "county": "Berkshire",
        "cases": 20655.0,
        "deaths": 1430.0
    },
    {
        "state": "Massachusetts",
        "county": "Bristol",
        "cases": 144917.0,
        "deaths": 7041.0
    },
    {
        "state": "Massachusetts",
        "county": "Dukes",
        "cases": 786.0,
        "deaths": 30.0
    },
    {
        "state": "Massachusetts",
        "county": "Essex",
        "cases": 344363.0,
        "deaths": 17532.0
    },
    {
        "state": "Massachusetts",
        "county": "Franklin",
        "cases": 10681.0,
        "deaths": 1509.0
    },
    {
        "state": "Massachusetts",
        "county": "Hampden",
        "cases": 150187.0,
        "deaths": 13861.0
    },
    {
        "state": "Massachusetts",
        "county": "Hampshire",
        "cases": 21096.0,
        "deaths": 1332.0
    },
    {
        "state": "Massachusetts",
        "county": "Middlesex",
        "cases": 558324.0,
        "deaths": 32107.0
    },
    {
        "state": "Massachusetts",
        "county": "Nantucket",
        "cases": 522.0,
        "deaths": 0.0
    },
    {
        "state": "Massachusetts",
        "county": "Norfolk",
        "cases": 232480.0,
        "deaths": 18197.0
    },
    {
        "state": "Massachusetts",
        "county": "Plymouth",
        "cases": 198763.0,
        "deaths": 10726.0
    },
    {
        "state": "Massachusetts",
        "county": "Suffolk",
        "cases": 500487.0,
        "deaths": 19325.0
    },
    {
        "state": "Massachusetts",
        "county": "Unknown",
        "cases": 25258.0,
        "deaths": 275.0
    },
    {
        "state": "Massachusetts",
        "county": "Worcester",
        "cases": 229269.0,
        "deaths": 11306.0
    },
    {
        "state": "Michigan",
        "county": "Alcona",
        "cases": 133.0,
        "deaths": 20.0
    },
    {
        "state": "Michigan",
        "county": "Allegan",
        "cases": 3894.0,
        "deaths": 48.0
    },
    {
        "state": "Michigan",
        "county": "Alpena",
        "cases": 2276.0,
        "deaths": 175.0
    },
    {
        "state": "Michigan",
        "county": "Antrim",
        "cases": 424.0,
        "deaths": 1.0
    },
    {
        "state": "Michigan",
        "county": "Arenac",
        "cases": 801.0,
        "deaths": 30.0
    },
    {
        "state": "Michigan",
        "county": "Baraga",
        "cases": 34.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Barry",
        "cases": 1447.0,
        "deaths": 37.0
    },
    {
        "state": "Michigan",
        "county": "Bay",
        "cases": 5938.0,
        "deaths": 241.0
    },
    {
        "state": "Michigan",
        "county": "Benzie",
        "cases": 130.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Berrien",
        "cases": 11792.0,
        "deaths": 655.0
    },
    {
        "state": "Michigan",
        "county": "Branch",
        "cases": 2469.0,
        "deaths": 86.0
    },
    {
        "state": "Michigan",
        "county": "Calhoun",
        "cases": 8618.0,
        "deaths": 456.0
    },
    {
        "state": "Michigan",
        "county": "Cass",
        "cases": 1337.0,
        "deaths": 77.0
    },
    {
        "state": "Michigan",
        "county": "Charlevoix",
        "cases": 608.0,
        "deaths": 37.0
    },
    {
        "state": "Michigan",
        "county": "Cheboygan",
        "cases": 722.0,
        "deaths": 46.0
    },
    {
        "state": "Michigan",
        "county": "Chippewa",
        "cases": 87.0,
        "deaths": 8.0
    },
    {
        "state": "Michigan",
        "county": "Clare",
        "cases": 433.0,
        "deaths": 56.0
    },
    {
        "state": "Michigan",
        "county": "Clinton",
        "cases": 5209.0,
        "deaths": 335.0
    },
    {
        "state": "Michigan",
        "county": "Crawford",
        "cases": 1743.0,
        "deaths": 125.0
    },
    {
        "state": "Michigan",
        "county": "Delta",
        "cases": 557.0,
        "deaths": 70.0
    },
    {
        "state": "Michigan",
        "county": "Dickinson",
        "cases": 160.0,
        "deaths": 86.0
    },
    {
        "state": "Michigan",
        "county": "Eaton",
        "cases": 5433.0,
        "deaths": 237.0
    },
    {
        "state": "Michigan",
        "county": "Emmet",
        "cases": 962.0,
        "deaths": 96.0
    },
    {
        "state": "Michigan",
        "county": "Genesee",
        "cases": 65254.0,
        "deaths": 6944.0
    },
    {
        "state": "Michigan",
        "county": "Gladwin",
        "cases": 539.0,
        "deaths": 30.0
    },
    {
        "state": "Michigan",
        "county": "Gogebic",
        "cases": 197.0,
        "deaths": 55.0
    },
    {
        "state": "Michigan",
        "county": "Grand Traverse",
        "cases": 927.0,
        "deaths": 204.0
    },
    {
        "state": "Michigan",
        "county": "Gratiot",
        "cases": 842.0,
        "deaths": 68.0
    },
    {
        "state": "Michigan",
        "county": "Hillsdale",
        "cases": 5261.0,
        "deaths": 669.0
    },
    {
        "state": "Michigan",
        "county": "Houghton",
        "cases": 88.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Huron",
        "cases": 880.0,
        "deaths": 19.0
    },
    {
        "state": "Michigan",
        "county": "Ingham",
        "cases": 19879.0,
        "deaths": 478.0
    },
    {
        "state": "Michigan",
        "county": "Ionia",
        "cases": 2726.0,
        "deaths": 92.0
    },
    {
        "state": "Michigan",
        "county": "Iosco",
        "cases": 1481.0,
        "deaths": 199.0
    },
    {
        "state": "Michigan",
        "county": "Isabella",
        "cases": 2379.0,
        "deaths": 274.0
    },
    {
        "state": "Michigan",
        "county": "Jackson",
        "cases": 13892.0,
        "deaths": 758.0
    },
    {
        "state": "Michigan",
        "county": "Kalamazoo",
        "cases": 15938.0,
        "deaths": 815.0
    },
    {
        "state": "Michigan",
        "county": "Kalkaska",
        "cases": 765.0,
        "deaths": 96.0
    },
    {
        "state": "Michigan",
        "county": "Kent",
        "cases": 60066.0,
        "deaths": 1400.0
    },
    {
        "state": "Michigan",
        "county": "Lake",
        "cases": 80.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Lapeer",
        "cases": 6681.0,
        "deaths": 919.0
    },
    {
        "state": "Michigan",
        "county": "Leelanau",
        "cases": 361.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Lenawee",
        "cases": 4107.0,
        "deaths": 49.0
    },
    {
        "state": "Michigan",
        "county": "Livingston",
        "cases": 14553.0,
        "deaths": 665.0
    },
    {
        "state": "Michigan",
        "county": "Luce",
        "cases": 51.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Mackinac",
        "cases": 230.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Macomb",
        "cases": 229182.0,
        "deaths": 22773.0
    },
    {
        "state": "Michigan",
        "county": "Manistee",
        "cases": 487.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Marquette",
        "cases": 1788.0,
        "deaths": 303.0
    },
    {
        "state": "Michigan",
        "county": "Mason",
        "cases": 461.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Mecosta",
        "cases": 630.0,
        "deaths": 71.0
    },
    {
        "state": "Michigan",
        "county": "Menominee",
        "cases": 163.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Midland",
        "cases": 2446.0,
        "deaths": 195.0
    },
    {
        "state": "Michigan",
        "county": "Missaukee",
        "cases": 478.0,
        "deaths": 54.0
    },
    {
        "state": "Michigan",
        "county": "Monroe",
        "cases": 13398.0,
        "deaths": 506.0
    },
    {
        "state": "Michigan",
        "county": "Montcalm",
        "cases": 1647.0,
        "deaths": 43.0
    },
    {
        "state": "Michigan",
        "county": "Montmorency",
        "cases": 166.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Muskegon",
        "cases": 10972.0,
        "deaths": 607.0
    },
    {
        "state": "Michigan",
        "county": "Newaygo",
        "cases": 927.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Oakland",
        "cases": 312633.0,
        "deaths": 27998.0
    },
    {
        "state": "Michigan",
        "county": "Oceana",
        "cases": 730.0,
        "deaths": 50.0
    },
    {
        "state": "Michigan",
        "county": "Ogemaw",
        "cases": 467.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Osceola",
        "cases": 339.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Oscoda",
        "cases": 201.0,
        "deaths": 12.0
    },
    {
        "state": "Michigan",
        "county": "Otsego",
        "cases": 3481.0,
        "deaths": 287.0
    },
    {
        "state": "Michigan",
        "county": "Ottawa",
        "cases": 10895.0,
        "deaths": 467.0
    },
    {
        "state": "Michigan",
        "county": "Presque Isle",
        "cases": 330.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Roscommon",
        "cases": 642.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Saginaw",
        "cases": 25845.0,
        "deaths": 2232.0
    },
    {
        "state": "Michigan",
        "county": "Sanilac",
        "cases": 1486.0,
        "deaths": 172.0
    },
    {
        "state": "Michigan",
        "county": "Schoolcraft",
        "cases": 131.0,
        "deaths": 0.0
    },
    {
        "state": "Michigan",
        "county": "Shiawassee",
        "cases": 6342.0,
        "deaths": 390.0
    },
    {
        "state": "Michigan",
        "county": "St. Clair",
        "cases": 13384.0,
        "deaths": 764.0
    },
    {
        "state": "Michigan",
        "county": "St. Joseph",
        "cases": 1820.0,
        "deaths": 37.0
    },
    {
        "state": "Michigan",
        "county": "Tuscola",
        "cases": 4286.0,
        "deaths": 562.0
    },
    {
        "state": "Michigan",
        "county": "Unknown",
        "cases": 63301.0,
        "deaths": 1572.0
    },
    {
        "state": "Michigan",
        "county": "Van Buren",
        "cases": 2463.0,
        "deaths": 113.0
    },
    {
        "state": "Michigan",
        "county": "Washtenaw",
        "cases": 47180.0,
        "deaths": 2405.0
    },
    {
        "state": "Michigan",
        "county": "Wayne",
        "cases": 722307.0,
        "deaths": 67754.0
    },
    {
        "state": "Michigan",
        "county": "Wexford",
        "cases": 409.0,
        "deaths": 62.0
    },
    {
        "state": "Minnesota",
        "county": "Aitkin",
        "cases": 51.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Anoka",
        "cases": 13224.0,
        "deaths": 598.0
    },
    {
        "state": "Minnesota",
        "county": "Becker",
        "cases": 460.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Beltrami",
        "cases": 303.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Benton",
        "cases": 1702.0,
        "deaths": 31.0
    },
    {
        "state": "Minnesota",
        "county": "Big Stone",
        "cases": 85.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Blue Earth",
        "cases": 1965.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Brown",
        "cases": 371.0,
        "deaths": 46.0
    },
    {
        "state": "Minnesota",
        "county": "Carlton",
        "cases": 2067.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Carver",
        "cases": 1949.0,
        "deaths": 16.0
    },
    {
        "state": "Minnesota",
        "county": "Cass",
        "cases": 264.0,
        "deaths": 18.0
    },
    {
        "state": "Minnesota",
        "county": "Chippewa",
        "cases": 289.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Chisago",
        "cases": 621.0,
        "deaths": 47.0
    },
    {
        "state": "Minnesota",
        "county": "Clay",
        "cases": 6355.0,
        "deaths": 389.0
    },
    {
        "state": "Minnesota",
        "county": "Clearwater",
        "cases": 112.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Cottonwood",
        "cases": 1053.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Crow Wing",
        "cases": 884.0,
        "deaths": 22.0
    },
    {
        "state": "Minnesota",
        "county": "Dakota",
        "cases": 12016.0,
        "deaths": 427.0
    },
    {
        "state": "Minnesota",
        "county": "Dodge",
        "cases": 1022.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Douglas",
        "cases": 307.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Faribault",
        "cases": 284.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Fillmore",
        "cases": 628.0,
        "deaths": 27.0
    },
    {
        "state": "Minnesota",
        "county": "Freeborn",
        "cases": 1603.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Goodhue",
        "cases": 974.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Grant",
        "cases": 30.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Hennepin",
        "cases": 93526.0,
        "deaths": 9427.0
    },
    {
        "state": "Minnesota",
        "county": "Houston",
        "cases": 58.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Isanti",
        "cases": 338.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Itasca",
        "cases": 612.0,
        "deaths": 30.0
    },
    {
        "state": "Minnesota",
        "county": "Jackson",
        "cases": 664.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Kanabec",
        "cases": 120.0,
        "deaths": 1.0
    },
    {
        "state": "Minnesota",
        "county": "Kandiyohi",
        "cases": 6002.0,
        "deaths": 22.0
    },
    {
        "state": "Minnesota",
        "county": "Kittson",
        "cases": 32.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Koochiching",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Lac qui Parle",
        "cases": 76.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Lake",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Le Sueur",
        "cases": 1275.0,
        "deaths": 8.0
    },
    {
        "state": "Minnesota",
        "county": "Lincoln",
        "cases": 128.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Lyon",
        "cases": 475.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Mahnomen",
        "cases": 96.0,
        "deaths": 14.0
    },
    {
        "state": "Minnesota",
        "county": "Marshall",
        "cases": 147.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Martin",
        "cases": 3538.0,
        "deaths": 202.0
    },
    {
        "state": "Minnesota",
        "county": "McLeod",
        "cases": 267.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Meeker",
        "cases": 527.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Mille Lacs",
        "cases": 142.0,
        "deaths": 31.0
    },
    {
        "state": "Minnesota",
        "county": "Morrison",
        "cases": 302.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Mower",
        "cases": 1630.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Murray",
        "cases": 586.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Nicollet",
        "cases": 672.0,
        "deaths": 75.0
    },
    {
        "state": "Minnesota",
        "county": "Nobles",
        "cases": 26475.0,
        "deaths": 42.0
    },
    {
        "state": "Minnesota",
        "county": "Norman",
        "cases": 269.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Olmsted",
        "cases": 12223.0,
        "deaths": 260.0
    },
    {
        "state": "Minnesota",
        "county": "Otter Tail",
        "cases": 645.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Pennington",
        "cases": 32.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Pine",
        "cases": 1828.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Pipestone",
        "cases": 161.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Polk",
        "cases": 1147.0,
        "deaths": 17.0
    },
    {
        "state": "Minnesota",
        "county": "Pope",
        "cases": 65.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Ramsey",
        "cases": 24121.0,
        "deaths": 1228.0
    },
    {
        "state": "Minnesota",
        "county": "Red Lake",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Redwood",
        "cases": 83.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Renville",
        "cases": 201.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Rice",
        "cases": 2460.0,
        "deaths": 42.0
    },
    {
        "state": "Minnesota",
        "county": "Rock",
        "cases": 435.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Roseau",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Scott",
        "cases": 3516.0,
        "deaths": 47.0
    },
    {
        "state": "Minnesota",
        "county": "Sherburne",
        "cases": 2398.0,
        "deaths": 18.0
    },
    {
        "state": "Minnesota",
        "county": "Sibley",
        "cases": 119.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "St. Louis",
        "cases": 3045.0,
        "deaths": 397.0
    },
    {
        "state": "Minnesota",
        "county": "Stearns",
        "cases": 24883.0,
        "deaths": 101.0
    },
    {
        "state": "Minnesota",
        "county": "Steele",
        "cases": 1494.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Swift",
        "cases": 150.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Todd",
        "cases": 739.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Traverse",
        "cases": 112.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Unknown",
        "cases": 1022.0,
        "deaths": 95.0
    },
    {
        "state": "Minnesota",
        "county": "Wabasha",
        "cases": 491.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Wadena",
        "cases": 70.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Waseca",
        "cases": 385.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Washington",
        "cases": 7448.0,
        "deaths": 396.0
    },
    {
        "state": "Minnesota",
        "county": "Watonwan",
        "cases": 613.0,
        "deaths": 0.0
    },
    {
        "state": "Minnesota",
        "county": "Wilkin",
        "cases": 435.0,
        "deaths": 103.0
    },
    {
        "state": "Minnesota",
        "county": "Winona",
        "cases": 2629.0,
        "deaths": 508.0
    },
    {
        "state": "Minnesota",
        "county": "Wright",
        "cases": 2659.0,
        "deaths": 39.0
    },
    {
        "state": "Minnesota",
        "county": "Yellow Medicine",
        "cases": 130.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Adams",
        "cases": 5070.0,
        "deaths": 341.0
    },
    {
        "state": "Mississippi",
        "county": "Alcorn",
        "cases": 421.0,
        "deaths": 21.0
    },
    {
        "state": "Mississippi",
        "county": "Amite",
        "cases": 1159.0,
        "deaths": 23.0
    },
    {
        "state": "Mississippi",
        "county": "Attala",
        "cases": 4778.0,
        "deaths": 79.0
    },
    {
        "state": "Mississippi",
        "county": "Benton",
        "cases": 457.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Bolivar",
        "cases": 4464.0,
        "deaths": 295.0
    },
    {
        "state": "Mississippi",
        "county": "Calhoun",
        "cases": 1939.0,
        "deaths": 114.0
    },
    {
        "state": "Mississippi",
        "county": "Carroll",
        "cases": 2188.0,
        "deaths": 90.0
    },
    {
        "state": "Mississippi",
        "county": "Chickasaw",
        "cases": 2968.0,
        "deaths": 277.0
    },
    {
        "state": "Mississippi",
        "county": "Choctaw",
        "cases": 670.0,
        "deaths": 59.0
    },
    {
        "state": "Mississippi",
        "county": "Claiborne",
        "cases": 1004.0,
        "deaths": 1.0
    },
    {
        "state": "Mississippi",
        "county": "Clarke",
        "cases": 2265.0,
        "deaths": 196.0
    },
    {
        "state": "Mississippi",
        "county": "Clay",
        "cases": 1884.0,
        "deaths": 75.0
    },
    {
        "state": "Mississippi",
        "county": "Coahoma",
        "cases": 2812.0,
        "deaths": 99.0
    },
    {
        "state": "Mississippi",
        "county": "Copiah",
        "cases": 4354.0,
        "deaths": 40.0
    },
    {
        "state": "Mississippi",
        "county": "Covington",
        "cases": 2458.0,
        "deaths": 8.0
    },
    {
        "state": "Mississippi",
        "county": "DeSoto",
        "cases": 12885.0,
        "deaths": 167.0
    },
    {
        "state": "Mississippi",
        "county": "Forrest",
        "cases": 9795.0,
        "deaths": 496.0
    },
    {
        "state": "Mississippi",
        "county": "Franklin",
        "cases": 719.0,
        "deaths": 25.0
    },
    {
        "state": "Mississippi",
        "county": "George",
        "cases": 559.0,
        "deaths": 32.0
    },
    {
        "state": "Mississippi",
        "county": "Greene",
        "cases": 191.0,
        "deaths": 26.0
    },
    {
        "state": "Mississippi",
        "county": "Grenada",
        "cases": 1423.0,
        "deaths": 33.0
    },
    {
        "state": "Mississippi",
        "county": "Hancock",
        "cases": 2841.0,
        "deaths": 289.0
    },
    {
        "state": "Mississippi",
        "county": "Harrison",
        "cases": 7777.0,
        "deaths": 253.0
    },
    {
        "state": "Mississippi",
        "county": "Hinds",
        "cases": 21560.0,
        "deaths": 388.0
    },
    {
        "state": "Mississippi",
        "county": "Holmes",
        "cases": 6062.0,
        "deaths": 415.0
    },
    {
        "state": "Mississippi",
        "county": "Humphreys",
        "cases": 987.0,
        "deaths": 142.0
    },
    {
        "state": "Mississippi",
        "county": "Itawamba",
        "cases": 1927.0,
        "deaths": 133.0
    },
    {
        "state": "Mississippi",
        "county": "Jackson",
        "cases": 10537.0,
        "deaths": 350.0
    },
    {
        "state": "Mississippi",
        "county": "Jasper",
        "cases": 2150.0,
        "deaths": 55.0
    },
    {
        "state": "Mississippi",
        "county": "Jefferson",
        "cases": 744.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Jefferson Davis",
        "cases": 1326.0,
        "deaths": 42.0
    },
    {
        "state": "Mississippi",
        "county": "Jones",
        "cases": 6507.0,
        "deaths": 104.0
    },
    {
        "state": "Mississippi",
        "county": "Kemper",
        "cases": 2336.0,
        "deaths": 119.0
    },
    {
        "state": "Mississippi",
        "county": "Lafayette",
        "cases": 3456.0,
        "deaths": 118.0
    },
    {
        "state": "Mississippi",
        "county": "Lamar",
        "cases": 4380.0,
        "deaths": 102.0
    },
    {
        "state": "Mississippi",
        "county": "Lauderdale",
        "cases": 14680.0,
        "deaths": 1072.0
    },
    {
        "state": "Mississippi",
        "county": "Lawrence",
        "cases": 1754.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Leake",
        "cases": 7804.0,
        "deaths": 88.0
    },
    {
        "state": "Mississippi",
        "county": "Lee",
        "cases": 3187.0,
        "deaths": 177.0
    },
    {
        "state": "Mississippi",
        "county": "Leflore",
        "cases": 5891.0,
        "deaths": 599.0
    },
    {
        "state": "Mississippi",
        "county": "Lincoln",
        "cases": 5813.0,
        "deaths": 404.0
    },
    {
        "state": "Mississippi",
        "county": "Lowndes",
        "cases": 2577.0,
        "deaths": 88.0
    },
    {
        "state": "Mississippi",
        "county": "Madison",
        "cases": 11954.0,
        "deaths": 339.0
    },
    {
        "state": "Mississippi",
        "county": "Marion",
        "cases": 2584.0,
        "deaths": 180.0
    },
    {
        "state": "Mississippi",
        "county": "Marshall",
        "cases": 2126.0,
        "deaths": 91.0
    },
    {
        "state": "Mississippi",
        "county": "Monroe",
        "cases": 5722.0,
        "deaths": 521.0
    },
    {
        "state": "Mississippi",
        "county": "Montgomery",
        "cases": 1607.0,
        "deaths": 50.0
    },
    {
        "state": "Mississippi",
        "county": "Neshoba",
        "cases": 7786.0,
        "deaths": 298.0
    },
    {
        "state": "Mississippi",
        "county": "Newton",
        "cases": 3464.0,
        "deaths": 19.0
    },
    {
        "state": "Mississippi",
        "county": "Noxubee",
        "cases": 2681.0,
        "deaths": 37.0
    },
    {
        "state": "Mississippi",
        "county": "Oktibbeha",
        "cases": 2760.0,
        "deaths": 137.0
    },
    {
        "state": "Mississippi",
        "county": "Panola",
        "cases": 1678.0,
        "deaths": 89.0
    },
    {
        "state": "Mississippi",
        "county": "Pearl River",
        "cases": 6847.0,
        "deaths": 687.0
    },
    {
        "state": "Mississippi",
        "county": "Perry",
        "cases": 1217.0,
        "deaths": 58.0
    },
    {
        "state": "Mississippi",
        "county": "Pike",
        "cases": 5668.0,
        "deaths": 247.0
    },
    {
        "state": "Mississippi",
        "county": "Pontotoc",
        "cases": 925.0,
        "deaths": 83.0
    },
    {
        "state": "Mississippi",
        "county": "Prentiss",
        "cases": 1217.0,
        "deaths": 43.0
    },
    {
        "state": "Mississippi",
        "county": "Quitman",
        "cases": 692.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Rankin",
        "cases": 8447.0,
        "deaths": 197.0
    },
    {
        "state": "Mississippi",
        "county": "Scott",
        "cases": 12081.0,
        "deaths": 95.0
    },
    {
        "state": "Mississippi",
        "county": "Sharkey",
        "cases": 203.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Simpson",
        "cases": 1765.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Smith",
        "cases": 2939.0,
        "deaths": 160.0
    },
    {
        "state": "Mississippi",
        "county": "Stone",
        "cases": 824.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Sunflower",
        "cases": 2392.0,
        "deaths": 105.0
    },
    {
        "state": "Mississippi",
        "county": "Tallahatchie",
        "cases": 475.0,
        "deaths": 33.0
    },
    {
        "state": "Mississippi",
        "county": "Tate",
        "cases": 1814.0,
        "deaths": 1.0
    },
    {
        "state": "Mississippi",
        "county": "Tippah",
        "cases": 2677.0,
        "deaths": 378.0
    },
    {
        "state": "Mississippi",
        "county": "Tishomingo",
        "cases": 303.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Tunica",
        "cases": 1564.0,
        "deaths": 75.0
    },
    {
        "state": "Mississippi",
        "county": "Union",
        "cases": 1187.0,
        "deaths": 78.0
    },
    {
        "state": "Mississippi",
        "county": "Unknown",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Walthall",
        "cases": 1400.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Warren",
        "cases": 2725.0,
        "deaths": 77.0
    },
    {
        "state": "Mississippi",
        "county": "Washington",
        "cases": 3559.0,
        "deaths": 125.0
    },
    {
        "state": "Mississippi",
        "county": "Wayne",
        "cases": 873.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Webster",
        "cases": 851.0,
        "deaths": 56.0
    },
    {
        "state": "Mississippi",
        "county": "Wilkinson",
        "cases": 2975.0,
        "deaths": 298.0
    },
    {
        "state": "Mississippi",
        "county": "Winston",
        "cases": 2010.0,
        "deaths": 0.0
    },
    {
        "state": "Mississippi",
        "county": "Yalobusha",
        "cases": 1212.0,
        "deaths": 3.0
    },
    {
        "state": "Mississippi",
        "county": "Yazoo",
        "cases": 5417.0,
        "deaths": 65.0
    },
    {
        "state": "Missouri",
        "county": "Adair",
        "cases": 640.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Andrew",
        "cases": 196.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Atchison",
        "cases": 90.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Audrain",
        "cases": 45.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Barry",
        "cases": 204.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Bates",
        "cases": 283.0,
        "deaths": 37.0
    },
    {
        "state": "Missouri",
        "county": "Benton",
        "cases": 265.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Bollinger",
        "cases": 165.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Boone",
        "cases": 4894.0,
        "deaths": 63.0
    },
    {
        "state": "Missouri",
        "county": "Buchanan",
        "cases": 8740.0,
        "deaths": 59.0
    },
    {
        "state": "Missouri",
        "county": "Butler",
        "cases": 989.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Caldwell",
        "cases": 109.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Callaway",
        "cases": 1090.0,
        "deaths": 44.0
    },
    {
        "state": "Missouri",
        "county": "Camden",
        "cases": 1582.0,
        "deaths": 53.0
    },
    {
        "state": "Missouri",
        "county": "Cape Girardeau",
        "cases": 1977.0,
        "deaths": 47.0
    },
    {
        "state": "Missouri",
        "county": "Carroll",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Carter",
        "cases": 162.0,
        "deaths": 46.0
    },
    {
        "state": "Missouri",
        "county": "Cass",
        "cases": 2673.0,
        "deaths": 252.0
    },
    {
        "state": "Missouri",
        "county": "Cedar",
        "cases": 304.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Chariton",
        "cases": 240.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Christian",
        "cases": 946.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Clark",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Clay",
        "cases": 3452.0,
        "deaths": 44.0
    },
    {
        "state": "Missouri",
        "county": "Clinton",
        "cases": 572.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Cole",
        "cases": 2357.0,
        "deaths": 47.0
    },
    {
        "state": "Missouri",
        "county": "Cooper",
        "cases": 305.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Crawford",
        "cases": 297.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Dallas",
        "cases": 85.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Daviess",
        "cases": 87.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "DeKalb",
        "cases": 141.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Dent",
        "cases": 5.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Dunklin",
        "cases": 924.0,
        "deaths": 68.0
    },
    {
        "state": "Missouri",
        "county": "Franklin",
        "cases": 4811.0,
        "deaths": 362.0
    },
    {
        "state": "Missouri",
        "county": "Gasconade",
        "cases": 96.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Gentry",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Greene",
        "cases": 4443.0,
        "deaths": 404.0
    },
    {
        "state": "Missouri",
        "county": "Harrison",
        "cases": 273.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Henry",
        "cases": 312.0,
        "deaths": 52.0
    },
    {
        "state": "Missouri",
        "county": "Holt",
        "cases": 35.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Howard",
        "cases": 86.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Howell",
        "cases": 211.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Iron",
        "cases": 70.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Jackson",
        "cases": 14715.0,
        "deaths": 562.0
    },
    {
        "state": "Missouri",
        "county": "Jasper",
        "cases": 1020.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Jefferson",
        "cases": 10637.0,
        "deaths": 301.0
    },
    {
        "state": "Missouri",
        "county": "Johnson",
        "cases": 2539.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Kansas City",
        "cases": 25687.0,
        "deaths": 617.0
    },
    {
        "state": "Missouri",
        "county": "Laclede",
        "cases": 29.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Lafayette",
        "cases": 2018.0,
        "deaths": 67.0
    },
    {
        "state": "Missouri",
        "county": "Lawrence",
        "cases": 91.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Lewis",
        "cases": 172.0,
        "deaths": 28.0
    },
    {
        "state": "Missouri",
        "county": "Lincoln",
        "cases": 2144.0,
        "deaths": 42.0
    },
    {
        "state": "Missouri",
        "county": "Linn",
        "cases": 207.0,
        "deaths": 37.0
    },
    {
        "state": "Missouri",
        "county": "Livingston",
        "cases": 103.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Macon",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Madison",
        "cases": 70.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Maries",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Marion",
        "cases": 136.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "McDonald",
        "cases": 224.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Miller",
        "cases": 74.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Mississippi",
        "cases": 930.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Moniteau",
        "cases": 1341.0,
        "deaths": 4.0
    },
    {
        "state": "Missouri",
        "county": "Montgomery",
        "cases": 325.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Morgan",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "New Madrid",
        "cases": 426.0,
        "deaths": 2.0
    },
    {
        "state": "Missouri",
        "county": "Newton",
        "cases": 518.0,
        "deaths": 28.0
    },
    {
        "state": "Missouri",
        "county": "Nodaway",
        "cases": 159.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Oregon",
        "cases": 61.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Osage",
        "cases": 217.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Pemiscot",
        "cases": 1397.0,
        "deaths": 59.0
    },
    {
        "state": "Missouri",
        "county": "Perry",
        "cases": 1935.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Pettis",
        "cases": 1490.0,
        "deaths": 8.0
    },
    {
        "state": "Missouri",
        "county": "Phelps",
        "cases": 70.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Pike",
        "cases": 400.0,
        "deaths": 8.0
    },
    {
        "state": "Missouri",
        "county": "Platte",
        "cases": 1600.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Polk",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Pulaski",
        "cases": 1341.0,
        "deaths": 49.0
    },
    {
        "state": "Missouri",
        "county": "Ralls",
        "cases": 64.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Randolph",
        "cases": 378.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Ray",
        "cases": 446.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Reynolds",
        "cases": 102.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Ripley",
        "cases": 207.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Saline",
        "cases": 5946.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Schuyler",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Scotland",
        "cases": 156.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Scott",
        "cases": 2575.0,
        "deaths": 101.0
    },
    {
        "state": "Missouri",
        "county": "Shelby",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "St. Charles",
        "cases": 23794.0,
        "deaths": 1440.0
    },
    {
        "state": "Missouri",
        "county": "St. Clair",
        "cases": 83.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "St. Francois",
        "cases": 1212.0,
        "deaths": 48.0
    },
    {
        "state": "Missouri",
        "county": "St. Louis",
        "cases": 131132.0,
        "deaths": 6981.0
    },
    {
        "state": "Missouri",
        "county": "St. Louis city",
        "cases": 49163.0,
        "deaths": 2497.0
    },
    {
        "state": "Missouri",
        "county": "Ste. Genevieve",
        "cases": 348.0,
        "deaths": 44.0
    },
    {
        "state": "Missouri",
        "county": "Stoddard",
        "cases": 1003.0,
        "deaths": 1.0
    },
    {
        "state": "Missouri",
        "county": "Stone",
        "cases": 148.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Sullivan",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Taney",
        "cases": 475.0,
        "deaths": 60.0
    },
    {
        "state": "Missouri",
        "county": "Unknown",
        "cases": 162.0,
        "deaths": 1.0
    },
    {
        "state": "Missouri",
        "county": "Vernon",
        "cases": 159.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Warren",
        "cases": 903.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Washington",
        "cases": 272.0,
        "deaths": 25.0
    },
    {
        "state": "Missouri",
        "county": "Webster",
        "cases": 519.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Worth",
        "cases": 51.0,
        "deaths": 0.0
    },
    {
        "state": "Missouri",
        "county": "Wright",
        "cases": 440.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Beaverhead",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Big Horn",
        "cases": 138.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Broadwater",
        "cases": 218.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Carbon",
        "cases": 255.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Cascade",
        "cases": 745.0,
        "deaths": 62.0
    },
    {
        "state": "Montana",
        "county": "Deer Lodge",
        "cases": 155.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Flathead",
        "cases": 1763.0,
        "deaths": 65.0
    },
    {
        "state": "Montana",
        "county": "Gallatin",
        "cases": 7209.0,
        "deaths": 22.0
    },
    {
        "state": "Montana",
        "county": "Glacier",
        "cases": 215.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Golden Valley",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Hill",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Jefferson",
        "cases": 120.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Lake",
        "cases": 253.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Lewis and Clark",
        "cases": 852.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Liberty",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Lincoln",
        "cases": 359.0,
        "deaths": 54.0
    },
    {
        "state": "Montana",
        "county": "Madison",
        "cases": 418.0,
        "deaths": 51.0
    },
    {
        "state": "Montana",
        "county": "Meagher",
        "cases": 55.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Missoula",
        "cases": 1777.0,
        "deaths": 46.0
    },
    {
        "state": "Montana",
        "county": "Musselshell",
        "cases": 52.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Park",
        "cases": 366.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Pondera",
        "cases": 66.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Ravalli",
        "cases": 224.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Richland",
        "cases": 123.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Roosevelt",
        "cases": 273.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Silver Bow",
        "cases": 607.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Stillwater",
        "cases": 41.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Toole",
        "cases": 1272.0,
        "deaths": 241.0
    },
    {
        "state": "Montana",
        "county": "Wheatland",
        "cases": 26.0,
        "deaths": 0.0
    },
    {
        "state": "Montana",
        "county": "Yellowstone",
        "cases": 3644.0,
        "deaths": 53.0
    },
    {
        "state": "Nebraska",
        "county": "Adams",
        "cases": 6482.0,
        "deaths": 128.0
    },
    {
        "state": "Nebraska",
        "county": "Antelope",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Boone",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Box Butte",
        "cases": 39.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Buffalo",
        "cases": 3828.0,
        "deaths": 50.0
    },
    {
        "state": "Nebraska",
        "county": "Burt",
        "cases": 131.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Butler",
        "cases": 373.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Cass",
        "cases": 353.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Cedar",
        "cases": 109.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Cherry",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Cheyenne",
        "cases": 243.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Clay",
        "cases": 375.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Colfax",
        "cases": 7373.0,
        "deaths": 14.0
    },
    {
        "state": "Nebraska",
        "county": "Cuming",
        "cases": 314.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Custer",
        "cases": 1033.0,
        "deaths": 114.0
    },
    {
        "state": "Nebraska",
        "county": "Dakota",
        "cases": 28638.0,
        "deaths": 137.0
    },
    {
        "state": "Nebraska",
        "county": "Dawes",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Dawson",
        "cases": 16982.0,
        "deaths": 76.0
    },
    {
        "state": "Nebraska",
        "county": "Dixon",
        "cases": 417.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Dodge",
        "cases": 3799.0,
        "deaths": 5.0
    },
    {
        "state": "Nebraska",
        "county": "Douglas",
        "cases": 40692.0,
        "deaths": 640.0
    },
    {
        "state": "Nebraska",
        "county": "Fillmore",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Franklin",
        "cases": 158.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Frontier",
        "cases": 21.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Furnas",
        "cases": 110.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Gage",
        "cases": 1458.0,
        "deaths": 103.0
    },
    {
        "state": "Nebraska",
        "county": "Gosper",
        "cases": 350.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Greeley",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Hall",
        "cases": 37102.0,
        "deaths": 913.0
    },
    {
        "state": "Nebraska",
        "county": "Hamilton",
        "cases": 1586.0,
        "deaths": 219.0
    },
    {
        "state": "Nebraska",
        "county": "Hitchcock",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Holt",
        "cases": 17.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Howard",
        "cases": 588.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Jefferson",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Johnson",
        "cases": 147.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Kearney",
        "cases": 243.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Keith",
        "cases": 30.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Kimball",
        "cases": 452.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Knox",
        "cases": 183.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Lancaster",
        "cases": 13691.0,
        "deaths": 78.0
    },
    {
        "state": "Nebraska",
        "county": "Lincoln",
        "cases": 1299.0,
        "deaths": 73.0
    },
    {
        "state": "Nebraska",
        "county": "Madison",
        "cases": 5298.0,
        "deaths": 116.0
    },
    {
        "state": "Nebraska",
        "county": "Merrick",
        "cases": 595.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Morrill",
        "cases": 152.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Nance",
        "cases": 88.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Nemaha",
        "cases": 71.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Nuckolls",
        "cases": 4.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Otoe",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Phelps",
        "cases": 235.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Pierce",
        "cases": 41.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Platte",
        "cases": 6620.0,
        "deaths": 8.0
    },
    {
        "state": "Nebraska",
        "county": "Polk",
        "cases": 268.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Red Willow",
        "cases": 107.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Richardson",
        "cases": 7.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Saline",
        "cases": 7003.0,
        "deaths": 6.0
    },
    {
        "state": "Nebraska",
        "county": "Sarpy",
        "cases": 6289.0,
        "deaths": 24.0
    },
    {
        "state": "Nebraska",
        "county": "Saunders",
        "cases": 458.0,
        "deaths": 12.0
    },
    {
        "state": "Nebraska",
        "county": "Scotts Bluff",
        "cases": 1297.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Seward",
        "cases": 401.0,
        "deaths": 29.0
    },
    {
        "state": "Nebraska",
        "county": "Sherman",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Stanton",
        "cases": 259.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Thomas",
        "cases": 14.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Thurston",
        "cases": 256.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Unknown",
        "cases": 463.0,
        "deaths": 12.0
    },
    {
        "state": "Nebraska",
        "county": "Valley",
        "cases": 36.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Washington",
        "cases": 1134.0,
        "deaths": 37.0
    },
    {
        "state": "Nebraska",
        "county": "Wayne",
        "cases": 62.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "Webster",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Nebraska",
        "county": "York",
        "cases": 559.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Carson City",
        "cases": 1848.0,
        "deaths": 39.0
    },
    {
        "state": "Nevada",
        "county": "Churchill",
        "cases": 143.0,
        "deaths": 30.0
    },
    {
        "state": "Nevada",
        "county": "Clark",
        "cases": 173702.0,
        "deaths": 8403.0
    },
    {
        "state": "Nevada",
        "county": "Douglas",
        "cases": 848.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Elko",
        "cases": 975.0,
        "deaths": 46.0
    },
    {
        "state": "Nevada",
        "county": "Humboldt",
        "cases": 1900.0,
        "deaths": 85.0
    },
    {
        "state": "Nevada",
        "county": "Lander",
        "cases": 316.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Lincoln",
        "cases": 19.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Lyon",
        "cases": 1171.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Mineral",
        "cases": 95.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Nye",
        "cases": 1492.0,
        "deaths": 2.0
    },
    {
        "state": "Nevada",
        "county": "Storey",
        "cases": 2.0,
        "deaths": 0.0
    },
    {
        "state": "Nevada",
        "county": "Unknown",
        "cases": 1874.0,
        "deaths": 199.0
    },
    {
        "state": "Nevada",
        "county": "Washoe",
        "cases": 37790.0,
        "deaths": 1230.0
    },
    {
        "state": "Nevada",
        "county": "White Pine",
        "cases": 115.0,
        "deaths": 0.0
    },
    {
        "state": "New Hampshire",
        "county": "Belknap",
        "cases": 1681.0,
        "deaths": 0.0
    },
    {
        "state": "New Hampshire",
        "county": "Carroll",
        "cases": 1601.0,
        "deaths": 0.0
    },
    {
        "state": "New Hampshire",
        "county": "Cheshire",
        "cases": 1572.0,
        "deaths": 84.0
    },
    {
        "state": "New Hampshire",
        "county": "Coos",
        "cases": 97.0,
        "deaths": 0.0
    },
    {
        "state": "New Hampshire",
        "county": "Grafton",
        "cases": 2748.0,
        "deaths": 19.0
    },
    {
        "state": "New Hampshire",
        "county": "Hillsborough",
        "cases": 43138.0,
        "deaths": 1718.0
    },
    {
        "state": "New Hampshire",
        "county": "Merrimack",
        "cases": 7178.0,
        "deaths": 227.0
    },
    {
        "state": "New Hampshire",
        "county": "Rockingham",
        "cases": 31854.0,
        "deaths": 1134.0
    },
    {
        "state": "New Hampshire",
        "county": "Strafford",
        "cases": 6232.0,
        "deaths": 254.0
    },
    {
        "state": "New Hampshire",
        "county": "Sullivan",
        "cases": 526.0,
        "deaths": 49.0
    },
    {
        "state": "New Hampshire",
        "county": "Unknown",
        "cases": 559.0,
        "deaths": 12.0
    },
    {
        "state": "New Jersey",
        "county": "Atlantic",
        "cases": 39020.0,
        "deaths": 1940.0
    },
    {
        "state": "New Jersey",
        "county": "Bergen",
        "cases": 657648.0,
        "deaths": 43903.0
    },
    {
        "state": "New Jersey",
        "county": "Burlington",
        "cases": 109175.0,
        "deaths": 5252.0
    },
    {
        "state": "New Jersey",
        "county": "Camden",
        "cases": 144071.0,
        "deaths": 6010.0
    },
    {
        "state": "New Jersey",
        "county": "Cape May",
        "cases": 13510.0,
        "deaths": 932.0
    },
    {
        "state": "New Jersey",
        "county": "Cumberland",
        "cases": 32367.0,
        "deaths": 798.0
    },
    {
        "state": "New Jersey",
        "county": "Essex",
        "cases": 558549.0,
        "deaths": 45112.0
    },
    {
        "state": "New Jersey",
        "county": "Gloucester",
        "cases": 50626.0,
        "deaths": 2110.0
    },
    {
        "state": "New Jersey",
        "county": "Hudson",
        "cases": 587976.0,
        "deaths": 29153.0
    },
    {
        "state": "New Jersey",
        "county": "Hunterdon",
        "cases": 25132.0,
        "deaths": 1226.0
    },
    {
        "state": "New Jersey",
        "county": "Mercer",
        "cases": 160299.0,
        "deaths": 9188.0
    },
    {
        "state": "New Jersey",
        "county": "Middlesex",
        "cases": 470039.0,
        "deaths": 22686.0
    },
    {
        "state": "New Jersey",
        "county": "Monmouth",
        "cases": 257926.0,
        "deaths": 13801.0
    },
    {
        "state": "New Jersey",
        "county": "Morris",
        "cases": 218078.0,
        "deaths": 16097.0
    },
    {
        "state": "New Jersey",
        "county": "Ocean",
        "cases": 267564.0,
        "deaths": 15903.0
    },
    {
        "state": "New Jersey",
        "county": "Passaic",
        "cases": 489583.0,
        "deaths": 20686.0
    },
    {
        "state": "New Jersey",
        "county": "Salem",
        "cases": 10353.0,
        "deaths": 454.0
    },
    {
        "state": "New Jersey",
        "county": "Somerset",
        "cases": 138389.0,
        "deaths": 10076.0
    },
    {
        "state": "New Jersey",
        "county": "Sussex",
        "cases": 36709.0,
        "deaths": 3909.0
    },
    {
        "state": "New Jersey",
        "county": "Union",
        "cases": 501866.0,
        "deaths": 25719.0
    },
    {
        "state": "New Jersey",
        "county": "Unknown",
        "cases": 79606.0,
        "deaths": 168.0
    },
    {
        "state": "New Jersey",
        "county": "Warren",
        "cases": 34685.0,
        "deaths": 3021.0
    },
    {
        "state": "New Mexico",
        "county": "Bernalillo",
        "cases": 35452.0,
        "deaths": 1519.0
    },
    {
        "state": "New Mexico",
        "county": "Catron",
        "cases": 63.0,
        "deaths": 25.0
    },
    {
        "state": "New Mexico",
        "county": "Chaves",
        "cases": 1131.0,
        "deaths": 41.0
    },
    {
        "state": "New Mexico",
        "county": "Cibola",
        "cases": 2505.0,
        "deaths": 102.0
    },
    {
        "state": "New Mexico",
        "county": "Colfax",
        "cases": 175.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Curry",
        "cases": 860.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Doña Ana",
        "cases": 6532.0,
        "deaths": 56.0
    },
    {
        "state": "New Mexico",
        "county": "Eddy",
        "cases": 534.0,
        "deaths": 56.0
    },
    {
        "state": "New Mexico",
        "county": "Grant",
        "cases": 571.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Guadalupe",
        "cases": 404.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Harding",
        "cases": 27.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Hidalgo",
        "cases": 2.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Lea",
        "cases": 412.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Lincoln",
        "cases": 79.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Los Alamos",
        "cases": 247.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Luna",
        "cases": 199.0,
        "deaths": 20.0
    },
    {
        "state": "New Mexico",
        "county": "McKinley",
        "cases": 39573.0,
        "deaths": 1048.0
    },
    {
        "state": "New Mexico",
        "county": "Otero",
        "cases": 808.0,
        "deaths": 6.0
    },
    {
        "state": "New Mexico",
        "county": "Quay",
        "cases": 136.0,
        "deaths": 30.0
    },
    {
        "state": "New Mexico",
        "county": "Rio Arriba",
        "cases": 812.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Roosevelt",
        "cases": 356.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "San Juan",
        "cases": 27527.0,
        "deaths": 1759.0
    },
    {
        "state": "New Mexico",
        "county": "San Miguel",
        "cases": 173.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Sandoval",
        "cases": 16236.0,
        "deaths": 556.0
    },
    {
        "state": "New Mexico",
        "county": "Santa Fe",
        "cases": 4789.0,
        "deaths": 28.0
    },
    {
        "state": "New Mexico",
        "county": "Sierra",
        "cases": 21.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Socorro",
        "cases": 1575.0,
        "deaths": 69.0
    },
    {
        "state": "New Mexico",
        "county": "Taos",
        "cases": 920.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Torrance",
        "cases": 654.0,
        "deaths": 13.0
    },
    {
        "state": "New Mexico",
        "county": "Union",
        "cases": 73.0,
        "deaths": 0.0
    },
    {
        "state": "New Mexico",
        "county": "Unknown",
        "cases": 5.0,
        "deaths": 18.0
    },
    {
        "state": "New Mexico",
        "county": "Valencia",
        "cases": 1811.0,
        "deaths": 17.0
    },
    {
        "state": "New York",
        "county": "Albany",
        "cases": 47057.0,
        "deaths": 2682.0
    },
    {
        "state": "New York",
        "county": "Allegany",
        "cases": 1566.0,
        "deaths": 7.0
    },
    {
        "state": "New York",
        "county": "Broome",
        "cases": 12015.0,
        "deaths": 759.0
    },
    {
        "state": "New York",
        "county": "Cattaraugus",
        "cases": 1992.0,
        "deaths": 25.0
    },
    {
        "state": "New York",
        "county": "Cayuga",
        "cases": 1985.0,
        "deaths": 44.0
    },
    {
        "state": "New York",
        "county": "Chautauqua",
        "cases": 1473.0,
        "deaths": 70.0
    },
    {
        "state": "New York",
        "county": "Chemung",
        "cases": 4607.0,
        "deaths": 136.0
    },
    {
        "state": "New York",
        "county": "Chenango",
        "cases": 4170.0,
        "deaths": 28.0
    },
    {
        "state": "New York",
        "county": "Clinton",
        "cases": 2929.0,
        "deaths": 140.0
    },
    {
        "state": "New York",
        "county": "Columbia",
        "cases": 8674.0,
        "deaths": 759.0
    },
    {
        "state": "New York",
        "county": "Cortland",
        "cases": 1249.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Delaware",
        "cases": 2623.0,
        "deaths": 6.0
    },
    {
        "state": "New York",
        "county": "Dutchess",
        "cases": 123710.0,
        "deaths": 3179.0
    },
    {
        "state": "New York",
        "county": "Erie",
        "cases": 141273.0,
        "deaths": 10203.0
    },
    {
        "state": "New York",
        "county": "Essex",
        "cases": 1302.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Franklin",
        "cases": 709.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Fulton",
        "cases": 3144.0,
        "deaths": 128.0
    },
    {
        "state": "New York",
        "county": "Genesee",
        "cases": 5806.0,
        "deaths": 89.0
    },
    {
        "state": "New York",
        "county": "Greene",
        "cases": 5669.0,
        "deaths": 38.0
    },
    {
        "state": "New York",
        "county": "Hamilton",
        "cases": 193.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Herkimer",
        "cases": 2793.0,
        "deaths": 64.0
    },
    {
        "state": "New York",
        "county": "Jefferson",
        "cases": 2673.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Lewis",
        "cases": 443.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Livingston",
        "cases": 3010.0,
        "deaths": 97.0
    },
    {
        "state": "New York",
        "county": "Madison",
        "cases": 7632.0,
        "deaths": 118.0
    },
    {
        "state": "New York",
        "county": "Monroe",
        "cases": 64533.0,
        "deaths": 4179.0
    },
    {
        "state": "New York",
        "county": "Montgomery",
        "cases": 2229.0,
        "deaths": 68.0
    },
    {
        "state": "New York",
        "county": "Nassau",
        "cases": 1530437.0,
        "deaths": 82301.0
    },
    {
        "state": "New York",
        "county": "New York City",
        "cases": 7382110.0,
        "deaths": 697822.0
    },
    {
        "state": "New York",
        "county": "Niagara",
        "cases": 19050.0,
        "deaths": 732.0
    },
    {
        "state": "New York",
        "county": "Oneida",
        "cases": 19395.0,
        "deaths": 627.0
    },
    {
        "state": "New York",
        "county": "Onondaga",
        "cases": 39251.0,
        "deaths": 1756.0
    },
    {
        "state": "New York",
        "county": "Ontario",
        "cases": 4110.0,
        "deaths": 164.0
    },
    {
        "state": "New York",
        "county": "Orange",
        "cases": 355666.0,
        "deaths": 9799.0
    },
    {
        "state": "New York",
        "county": "Orleans",
        "cases": 3631.0,
        "deaths": 282.0
    },
    {
        "state": "New York",
        "county": "Oswego",
        "cases": 2772.0,
        "deaths": 14.0
    },
    {
        "state": "New York",
        "county": "Otsego",
        "cases": 2666.0,
        "deaths": 198.0
    },
    {
        "state": "New York",
        "county": "Putnam",
        "cases": 38493.0,
        "deaths": 1835.0
    },
    {
        "state": "New York",
        "county": "Rensselaer",
        "cases": 12172.0,
        "deaths": 764.0
    },
    {
        "state": "New York",
        "county": "Rockland",
        "cases": 497794.0,
        "deaths": 14277.0
    },
    {
        "state": "New York",
        "county": "Saratoga",
        "cases": 15291.0,
        "deaths": 111.0
    },
    {
        "state": "New York",
        "county": "Schenectady",
        "cases": 19212.0,
        "deaths": 927.0
    },
    {
        "state": "New York",
        "county": "Schoharie",
        "cases": 1491.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Schuyler",
        "cases": 317.0,
        "deaths": 0.0
    },
    {
        "state": "New York",
        "county": "Seneca",
        "cases": 1465.0,
        "deaths": 22.0
    },
    {
        "state": "New York",
        "county": "St. Lawrence",
        "cases": 6658.0,
        "deaths": 64.0
    },
    {
        "state": "New York",
        "county": "Steuben",
        "cases": 8530.0,
        "deaths": 462.0
    },
    {
        "state": "New York",
        "county": "Suffolk",
        "cases": 1414204.0,
        "deaths": 50545.0
    },
    {
        "state": "New York",
        "county": "Sullivan",
        "cases": 34886.0,
        "deaths": 610.0
    },
    {
        "state": "New York",
        "county": "Tioga",
        "cases": 2975.0,
        "deaths": 273.0
    },
    {
        "state": "New York",
        "county": "Tompkins",
        "cases": 6210.0,
        "deaths": 76.0
    },
    {
        "state": "New York",
        "county": "Ulster",
        "cases": 50585.0,
        "deaths": 639.0
    },
    {
        "state": "New York",
        "county": "Unknown",
        "cases": 2128.0,
        "deaths": 4359.0
    },
    {
        "state": "New York",
        "county": "Warren",
        "cases": 6438.0,
        "deaths": 506.0
    },
    {
        "state": "New York",
        "county": "Washington",
        "cases": 5628.0,
        "deaths": 153.0
    },
    {
        "state": "New York",
        "county": "Wayne",
        "cases": 3098.0,
        "deaths": 14.0
    },
    {
        "state": "New York",
        "county": "Westchester",
        "cases": 1285805.0,
        "deaths": 44698.0
    },
    {
        "state": "New York",
        "county": "Wyoming",
        "cases": 2558.0,
        "deaths": 119.0
    },
    {
        "state": "New York",
        "county": "Yates",
        "cases": 622.0,
        "deaths": 70.0
    },
    {
        "state": "North Carolina",
        "county": "Alamance",
        "cases": 4574.0,
        "deaths": 118.0
    },
    {
        "state": "North Carolina",
        "county": "Alexander",
        "cases": 303.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Alleghany",
        "cases": 221.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Anson",
        "cases": 1090.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Ashe",
        "cases": 338.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Avery",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Beaufort",
        "cases": 881.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Bertie",
        "cases": 1851.0,
        "deaths": 78.0
    },
    {
        "state": "North Carolina",
        "county": "Bladen",
        "cases": 1104.0,
        "deaths": 20.0
    },
    {
        "state": "North Carolina",
        "county": "Brunswick",
        "cases": 2058.0,
        "deaths": 123.0
    },
    {
        "state": "North Carolina",
        "county": "Buncombe",
        "cases": 3383.0,
        "deaths": 153.0
    },
    {
        "state": "North Carolina",
        "county": "Burke",
        "cases": 4475.0,
        "deaths": 349.0
    },
    {
        "state": "North Carolina",
        "county": "Cabarrus",
        "cases": 11771.0,
        "deaths": 452.0
    },
    {
        "state": "North Carolina",
        "county": "Caldwell",
        "cases": 1694.0,
        "deaths": 11.0
    },
    {
        "state": "North Carolina",
        "county": "Camden",
        "cases": 42.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Carteret",
        "cases": 1278.0,
        "deaths": 100.0
    },
    {
        "state": "North Carolina",
        "county": "Caswell",
        "cases": 942.0,
        "deaths": 12.0
    },
    {
        "state": "North Carolina",
        "county": "Catawba",
        "cases": 2624.0,
        "deaths": 57.0
    },
    {
        "state": "North Carolina",
        "county": "Chatham",
        "cases": 11842.0,
        "deaths": 324.0
    },
    {
        "state": "North Carolina",
        "county": "Cherokee",
        "cases": 745.0,
        "deaths": 50.0
    },
    {
        "state": "North Carolina",
        "county": "Chowan",
        "cases": 306.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Clay",
        "cases": 213.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Cleveland",
        "cases": 2022.0,
        "deaths": 63.0
    },
    {
        "state": "North Carolina",
        "county": "Columbus",
        "cases": 5204.0,
        "deaths": 354.0
    },
    {
        "state": "North Carolina",
        "county": "Craven",
        "cases": 2093.0,
        "deaths": 132.0
    },
    {
        "state": "North Carolina",
        "county": "Cumberland",
        "cases": 10241.0,
        "deaths": 270.0
    },
    {
        "state": "North Carolina",
        "county": "Currituck",
        "cases": 232.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Dare",
        "cases": 551.0,
        "deaths": 41.0
    },
    {
        "state": "North Carolina",
        "county": "Davidson",
        "cases": 7091.0,
        "deaths": 250.0
    },
    {
        "state": "North Carolina",
        "county": "Davie",
        "cases": 1396.0,
        "deaths": 94.0
    },
    {
        "state": "North Carolina",
        "county": "Duplin",
        "cases": 5480.0,
        "deaths": 79.0
    },
    {
        "state": "North Carolina",
        "county": "Durham",
        "cases": 28496.0,
        "deaths": 758.0
    },
    {
        "state": "North Carolina",
        "county": "Edgecombe",
        "cases": 3898.0,
        "deaths": 154.0
    },
    {
        "state": "North Carolina",
        "county": "Forsyth",
        "cases": 11974.0,
        "deaths": 216.0
    },
    {
        "state": "North Carolina",
        "county": "Franklin",
        "cases": 3925.0,
        "deaths": 563.0
    },
    {
        "state": "North Carolina",
        "county": "Gaston",
        "cases": 6132.0,
        "deaths": 163.0
    },
    {
        "state": "North Carolina",
        "county": "Gates",
        "cases": 329.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Graham",
        "cases": 38.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Granville",
        "cases": 6067.0,
        "deaths": 200.0
    },
    {
        "state": "North Carolina",
        "county": "Greene",
        "cases": 987.0,
        "deaths": 12.0
    },
    {
        "state": "North Carolina",
        "county": "Guilford",
        "cases": 17381.0,
        "deaths": 1094.0
    },
    {
        "state": "North Carolina",
        "county": "Halifax",
        "cases": 2468.0,
        "deaths": 33.0
    },
    {
        "state": "North Carolina",
        "county": "Harnett",
        "cases": 6084.0,
        "deaths": 350.0
    },
    {
        "state": "North Carolina",
        "county": "Haywood",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Henderson",
        "cases": 7461.0,
        "deaths": 769.0
    },
    {
        "state": "North Carolina",
        "county": "Hertford",
        "cases": 1256.0,
        "deaths": 45.0
    },
    {
        "state": "North Carolina",
        "county": "Hoke",
        "cases": 3149.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Hyde",
        "cases": 21.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Iredell",
        "cases": 5202.0,
        "deaths": 148.0
    },
    {
        "state": "North Carolina",
        "county": "Jackson",
        "cases": 468.0,
        "deaths": 15.0
    },
    {
        "state": "North Carolina",
        "county": "Johnston",
        "cases": 6820.0,
        "deaths": 542.0
    },
    {
        "state": "North Carolina",
        "county": "Jones",
        "cases": 555.0,
        "deaths": 67.0
    },
    {
        "state": "North Carolina",
        "county": "Lee",
        "cases": 6114.0,
        "deaths": 31.0
    },
    {
        "state": "North Carolina",
        "county": "Lenoir",
        "cases": 2884.0,
        "deaths": 103.0
    },
    {
        "state": "North Carolina",
        "county": "Lincoln",
        "cases": 1272.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Macon",
        "cases": 115.0,
        "deaths": 43.0
    },
    {
        "state": "North Carolina",
        "county": "Madison",
        "cases": 28.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Martin",
        "cases": 790.0,
        "deaths": 37.0
    },
    {
        "state": "North Carolina",
        "county": "McDowell",
        "cases": 1056.0,
        "deaths": 25.0
    },
    {
        "state": "North Carolina",
        "county": "Mecklenburg",
        "cases": 74474.0,
        "deaths": 1779.0
    },
    {
        "state": "North Carolina",
        "county": "Mitchell",
        "cases": 217.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Montgomery",
        "cases": 1342.0,
        "deaths": 73.0
    },
    {
        "state": "North Carolina",
        "county": "Moore",
        "cases": 3601.0,
        "deaths": 161.0
    },
    {
        "state": "North Carolina",
        "county": "Nash",
        "cases": 3778.0,
        "deaths": 88.0
    },
    {
        "state": "North Carolina",
        "county": "New Hanover",
        "cases": 3733.0,
        "deaths": 92.0
    },
    {
        "state": "North Carolina",
        "county": "Northampton",
        "cases": 4027.0,
        "deaths": 173.0
    },
    {
        "state": "North Carolina",
        "county": "Onslow",
        "cases": 2027.0,
        "deaths": 66.0
    },
    {
        "state": "North Carolina",
        "county": "Orange",
        "cases": 9300.0,
        "deaths": 687.0
    },
    {
        "state": "North Carolina",
        "county": "Pamlico",
        "cases": 307.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Pasquotank",
        "cases": 1876.0,
        "deaths": 77.0
    },
    {
        "state": "North Carolina",
        "county": "Pender",
        "cases": 777.0,
        "deaths": 15.0
    },
    {
        "state": "North Carolina",
        "county": "Perquimans",
        "cases": 525.0,
        "deaths": 33.0
    },
    {
        "state": "North Carolina",
        "county": "Person",
        "cases": 896.0,
        "deaths": 21.0
    },
    {
        "state": "North Carolina",
        "county": "Pitt",
        "cases": 5565.0,
        "deaths": 67.0
    },
    {
        "state": "North Carolina",
        "county": "Polk",
        "cases": 853.0,
        "deaths": 21.0
    },
    {
        "state": "North Carolina",
        "county": "Randolph",
        "cases": 8656.0,
        "deaths": 151.0
    },
    {
        "state": "North Carolina",
        "county": "Richmond",
        "cases": 2107.0,
        "deaths": 72.0
    },
    {
        "state": "North Carolina",
        "county": "Robeson",
        "cases": 8362.0,
        "deaths": 174.0
    },
    {
        "state": "North Carolina",
        "county": "Rockingham",
        "cases": 1170.0,
        "deaths": 89.0
    },
    {
        "state": "North Carolina",
        "county": "Rowan",
        "cases": 14834.0,
        "deaths": 764.0
    },
    {
        "state": "North Carolina",
        "county": "Rutherford",
        "cases": 4644.0,
        "deaths": 202.0
    },
    {
        "state": "North Carolina",
        "county": "Sampson",
        "cases": 3606.0,
        "deaths": 15.0
    },
    {
        "state": "North Carolina",
        "county": "Scotland",
        "cases": 1091.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Stanly",
        "cases": 1111.0,
        "deaths": 133.0
    },
    {
        "state": "North Carolina",
        "county": "Stokes",
        "cases": 583.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Surry",
        "cases": 1169.0,
        "deaths": 18.0
    },
    {
        "state": "North Carolina",
        "county": "Swain",
        "cases": 99.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Transylvania",
        "cases": 344.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Tyrrell",
        "cases": 141.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Union",
        "cases": 9971.0,
        "deaths": 396.0
    },
    {
        "state": "North Carolina",
        "county": "Vance",
        "cases": 3880.0,
        "deaths": 279.0
    },
    {
        "state": "North Carolina",
        "county": "Wake",
        "cases": 36094.0,
        "deaths": 592.0
    },
    {
        "state": "North Carolina",
        "county": "Warren",
        "cases": 518.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Washington",
        "cases": 944.0,
        "deaths": 97.0
    },
    {
        "state": "North Carolina",
        "county": "Watauga",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "North Carolina",
        "county": "Wayne",
        "cases": 22705.0,
        "deaths": 353.0
    },
    {
        "state": "North Carolina",
        "county": "Wilkes",
        "cases": 4670.0,
        "deaths": 48.0
    },
    {
        "state": "North Carolina",
        "county": "Wilson",
        "cases": 6549.0,
        "deaths": 257.0
    },
    {
        "state": "North Carolina",
        "county": "Yadkin",
        "cases": 1415.0,
        "deaths": 35.0
    },
    {
        "state": "North Carolina",
        "county": "Yancey",
        "cases": 111.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Barnes",
        "cases": 163.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Benson",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Bottineau",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Bowman",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Burke",
        "cases": 155.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Burleigh",
        "cases": 3832.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Cass",
        "cases": 22126.0,
        "deaths": 627.0
    },
    {
        "state": "North Dakota",
        "county": "Divide",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Dunn",
        "cases": 376.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Eddy",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Emmons",
        "cases": 45.0,
        "deaths": 43.0
    },
    {
        "state": "North Dakota",
        "county": "Foster",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Grand Forks",
        "cases": 8042.0,
        "deaths": 31.0
    },
    {
        "state": "North Dakota",
        "county": "Grant",
        "cases": 59.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "McHenry",
        "cases": 66.0,
        "deaths": 51.0
    },
    {
        "state": "North Dakota",
        "county": "McIntosh",
        "cases": 55.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "McKenzie",
        "cases": 512.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "McLean",
        "cases": 181.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Mercer",
        "cases": 54.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Morton",
        "cases": 1394.0,
        "deaths": 88.0
    },
    {
        "state": "North Dakota",
        "county": "Mountrail",
        "cases": 1481.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Nelson",
        "cases": 31.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Oliver",
        "cases": 51.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Pembina",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Pierce",
        "cases": 133.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Ramsey",
        "cases": 224.0,
        "deaths": 2.0
    },
    {
        "state": "North Dakota",
        "county": "Ransom",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Renville",
        "cases": 19.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Richland",
        "cases": 262.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Rolette",
        "cases": 68.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Sargent",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Sioux",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Slope",
        "cases": 134.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Stark",
        "cases": 2191.0,
        "deaths": 81.0
    },
    {
        "state": "North Dakota",
        "county": "Steele",
        "cases": 3.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Stutsman",
        "cases": 312.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Traill",
        "cases": 16.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Unknown",
        "cases": 3.0,
        "deaths": 1.0
    },
    {
        "state": "North Dakota",
        "county": "Walsh",
        "cases": 264.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Ward",
        "cases": 1136.0,
        "deaths": 38.0
    },
    {
        "state": "North Dakota",
        "county": "Wells",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "North Dakota",
        "county": "Williams",
        "cases": 559.0,
        "deaths": 0.0
    },
    {
        "state": "Northern Mariana Islands",
        "county": "Unknown",
        "cases": 689.0,
        "deaths": 92.0
    },
    {
        "state": "Ohio",
        "county": "Adams",
        "cases": 202.0,
        "deaths": 2.0
    },
    {
        "state": "Ohio",
        "county": "Allen",
        "cases": 4578.0,
        "deaths": 766.0
    },
    {
        "state": "Ohio",
        "county": "Ashland",
        "cases": 401.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Ashtabula",
        "cases": 5254.0,
        "deaths": 522.0
    },
    {
        "state": "Ohio",
        "county": "Athens",
        "cases": 217.0,
        "deaths": 51.0
    },
    {
        "state": "Ohio",
        "county": "Auglaize",
        "cases": 1379.0,
        "deaths": 102.0
    },
    {
        "state": "Ohio",
        "county": "Belmont",
        "cases": 6612.0,
        "deaths": 238.0
    },
    {
        "state": "Ohio",
        "county": "Brown",
        "cases": 540.0,
        "deaths": 50.0
    },
    {
        "state": "Ohio",
        "county": "Butler",
        "cases": 13380.0,
        "deaths": 314.0
    },
    {
        "state": "Ohio",
        "county": "Carroll",
        "cases": 876.0,
        "deaths": 34.0
    },
    {
        "state": "Ohio",
        "county": "Champaign",
        "cases": 584.0,
        "deaths": 40.0
    },
    {
        "state": "Ohio",
        "county": "Clark",
        "cases": 2618.0,
        "deaths": 63.0
    },
    {
        "state": "Ohio",
        "county": "Clermont",
        "cases": 3986.0,
        "deaths": 107.0
    },
    {
        "state": "Ohio",
        "county": "Clinton",
        "cases": 1254.0,
        "deaths": 1.0
    },
    {
        "state": "Ohio",
        "county": "Columbiana",
        "cases": 10616.0,
        "deaths": 1001.0
    },
    {
        "state": "Ohio",
        "county": "Coshocton",
        "cases": 820.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Crawford",
        "cases": 2164.0,
        "deaths": 24.0
    },
    {
        "state": "Ohio",
        "county": "Cuyahoga",
        "cases": 97291.0,
        "deaths": 4272.0
    },
    {
        "state": "Ohio",
        "county": "Darke",
        "cases": 3314.0,
        "deaths": 544.0
    },
    {
        "state": "Ohio",
        "county": "Defiance",
        "cases": 879.0,
        "deaths": 27.0
    },
    {
        "state": "Ohio",
        "county": "Delaware",
        "cases": 7517.0,
        "deaths": 161.0
    },
    {
        "state": "Ohio",
        "county": "Erie",
        "cases": 2339.0,
        "deaths": 120.0
    },
    {
        "state": "Ohio",
        "county": "Fairfield",
        "cases": 5988.0,
        "deaths": 82.0
    },
    {
        "state": "Ohio",
        "county": "Fayette",
        "cases": 757.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Franklin",
        "cases": 109721.0,
        "deaths": 3235.0
    },
    {
        "state": "Ohio",
        "county": "Fulton",
        "cases": 925.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Gallia",
        "cases": 283.0,
        "deaths": 57.0
    },
    {
        "state": "Ohio",
        "county": "Geauga",
        "cases": 6305.0,
        "deaths": 529.0
    },
    {
        "state": "Ohio",
        "county": "Greene",
        "cases": 2081.0,
        "deaths": 150.0
    },
    {
        "state": "Ohio",
        "county": "Guernsey",
        "cases": 647.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Hamilton",
        "cases": 53007.0,
        "deaths": 2736.0
    },
    {
        "state": "Ohio",
        "county": "Hancock",
        "cases": 1497.0,
        "deaths": 40.0
    },
    {
        "state": "Ohio",
        "county": "Hardin",
        "cases": 879.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Harrison",
        "cases": 172.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Henry",
        "cases": 219.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Highland",
        "cases": 450.0,
        "deaths": 16.0
    },
    {
        "state": "Ohio",
        "county": "Hocking",
        "cases": 713.0,
        "deaths": 33.0
    },
    {
        "state": "Ohio",
        "county": "Holmes",
        "cases": 256.0,
        "deaths": 30.0
    },
    {
        "state": "Ohio",
        "county": "Huron",
        "cases": 1224.0,
        "deaths": 52.0
    },
    {
        "state": "Ohio",
        "county": "Jackson",
        "cases": 225.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Jefferson",
        "cases": 1805.0,
        "deaths": 42.0
    },
    {
        "state": "Ohio",
        "county": "Knox",
        "cases": 718.0,
        "deaths": 48.0
    },
    {
        "state": "Ohio",
        "county": "Lake",
        "cases": 7610.0,
        "deaths": 323.0
    },
    {
        "state": "Ohio",
        "county": "Lawrence",
        "cases": 985.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Licking",
        "cases": 5644.0,
        "deaths": 225.0
    },
    {
        "state": "Ohio",
        "county": "Logan",
        "cases": 744.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Lorain",
        "cases": 18123.0,
        "deaths": 1215.0
    },
    {
        "state": "Ohio",
        "county": "Lucas",
        "cases": 52817.0,
        "deaths": 4222.0
    },
    {
        "state": "Ohio",
        "county": "Madison",
        "cases": 2503.0,
        "deaths": 154.0
    },
    {
        "state": "Ohio",
        "county": "Mahoning",
        "cases": 36318.0,
        "deaths": 3539.0
    },
    {
        "state": "Ohio",
        "county": "Marion",
        "cases": 73543.0,
        "deaths": 263.0
    },
    {
        "state": "Ohio",
        "county": "Medina",
        "cases": 7640.0,
        "deaths": 575.0
    },
    {
        "state": "Ohio",
        "county": "Meigs",
        "cases": 95.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Mercer",
        "cases": 1850.0,
        "deaths": 49.0
    },
    {
        "state": "Ohio",
        "county": "Miami",
        "cases": 8367.0,
        "deaths": 1107.0
    },
    {
        "state": "Ohio",
        "county": "Monroe",
        "cases": 474.0,
        "deaths": 10.0
    },
    {
        "state": "Ohio",
        "county": "Montgomery",
        "cases": 13567.0,
        "deaths": 395.0
    },
    {
        "state": "Ohio",
        "county": "Morgan",
        "cases": 164.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Morrow",
        "cases": 2115.0,
        "deaths": 23.0
    },
    {
        "state": "Ohio",
        "county": "Muskingum",
        "cases": 748.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Noble",
        "cases": 179.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Ottawa",
        "cases": 1545.0,
        "deaths": 38.0
    },
    {
        "state": "Ohio",
        "county": "Paulding",
        "cases": 307.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Perry",
        "cases": 504.0,
        "deaths": 15.0
    },
    {
        "state": "Ohio",
        "county": "Pickaway",
        "cases": 55985.0,
        "deaths": 556.0
    },
    {
        "state": "Ohio",
        "county": "Pike",
        "cases": 135.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Portage",
        "cases": 9903.0,
        "deaths": 1495.0
    },
    {
        "state": "Ohio",
        "county": "Preble",
        "cases": 1024.0,
        "deaths": 42.0
    },
    {
        "state": "Ohio",
        "county": "Putnam",
        "cases": 2015.0,
        "deaths": 269.0
    },
    {
        "state": "Ohio",
        "county": "Richland",
        "cases": 3738.0,
        "deaths": 61.0
    },
    {
        "state": "Ohio",
        "county": "Ross",
        "cases": 1599.0,
        "deaths": 29.0
    },
    {
        "state": "Ohio",
        "county": "Sandusky",
        "cases": 1309.0,
        "deaths": 191.0
    },
    {
        "state": "Ohio",
        "county": "Scioto",
        "cases": 375.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Seneca",
        "cases": 572.0,
        "deaths": 55.0
    },
    {
        "state": "Ohio",
        "county": "Shelby",
        "cases": 1335.0,
        "deaths": 26.0
    },
    {
        "state": "Ohio",
        "county": "Stark",
        "cases": 15389.0,
        "deaths": 1835.0
    },
    {
        "state": "Ohio",
        "county": "Summit",
        "cases": 27095.0,
        "deaths": 2230.0
    },
    {
        "state": "Ohio",
        "county": "Trumbull",
        "cases": 13637.0,
        "deaths": 1133.0
    },
    {
        "state": "Ohio",
        "county": "Tuscarawas",
        "cases": 4719.0,
        "deaths": 14.0
    },
    {
        "state": "Ohio",
        "county": "Union",
        "cases": 929.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Unknown",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Van Wert",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Vinton",
        "cases": 232.0,
        "deaths": 0.0
    },
    {
        "state": "Ohio",
        "county": "Warren",
        "cases": 6817.0,
        "deaths": 392.0
    },
    {
        "state": "Ohio",
        "county": "Washington",
        "cases": 3654.0,
        "deaths": 432.0
    },
    {
        "state": "Ohio",
        "county": "Wayne",
        "cases": 5387.0,
        "deaths": 1092.0
    },
    {
        "state": "Ohio",
        "county": "Williams",
        "cases": 1139.0,
        "deaths": 35.0
    },
    {
        "state": "Ohio",
        "county": "Wood",
        "cases": 6524.0,
        "deaths": 856.0
    },
    {
        "state": "Ohio",
        "county": "Wyandot",
        "cases": 932.0,
        "deaths": 80.0
    },
    {
        "state": "Oklahoma",
        "county": "Adair",
        "cases": 2448.0,
        "deaths": 120.0
    },
    {
        "state": "Oklahoma",
        "county": "Alfalfa",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Atoka",
        "cases": 49.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Beaver",
        "cases": 395.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Beckham",
        "cases": 175.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Blaine",
        "cases": 35.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Bryan",
        "cases": 371.0,
        "deaths": 29.0
    },
    {
        "state": "Oklahoma",
        "county": "Caddo",
        "cases": 2771.0,
        "deaths": 236.0
    },
    {
        "state": "Oklahoma",
        "county": "Canadian",
        "cases": 4084.0,
        "deaths": 124.0
    },
    {
        "state": "Oklahoma",
        "county": "Carter",
        "cases": 172.0,
        "deaths": 23.0
    },
    {
        "state": "Oklahoma",
        "county": "Cherokee",
        "cases": 1153.0,
        "deaths": 43.0
    },
    {
        "state": "Oklahoma",
        "county": "Choctaw",
        "cases": 142.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Cimarron",
        "cases": 29.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Cleveland",
        "cases": 17589.0,
        "deaths": 1208.0
    },
    {
        "state": "Oklahoma",
        "county": "Coal",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Comanche",
        "cases": 4590.0,
        "deaths": 54.0
    },
    {
        "state": "Oklahoma",
        "county": "Cotton",
        "cases": 229.0,
        "deaths": 39.0
    },
    {
        "state": "Oklahoma",
        "county": "Craig",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Creek",
        "cases": 3430.0,
        "deaths": 237.0
    },
    {
        "state": "Oklahoma",
        "county": "Custer",
        "cases": 466.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Delaware",
        "cases": 3490.0,
        "deaths": 407.0
    },
    {
        "state": "Oklahoma",
        "county": "Dewey",
        "cases": 78.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Garfield",
        "cases": 665.0,
        "deaths": 40.0
    },
    {
        "state": "Oklahoma",
        "county": "Garvin",
        "cases": 640.0,
        "deaths": 21.0
    },
    {
        "state": "Oklahoma",
        "county": "Grady",
        "cases": 1499.0,
        "deaths": 55.0
    },
    {
        "state": "Oklahoma",
        "county": "Grant",
        "cases": 86.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Greer",
        "cases": 2602.0,
        "deaths": 249.0
    },
    {
        "state": "Oklahoma",
        "county": "Harper",
        "cases": 32.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Haskell",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Jackson",
        "cases": 621.0,
        "deaths": 9.0
    },
    {
        "state": "Oklahoma",
        "county": "Jefferson",
        "cases": 85.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Johnston",
        "cases": 106.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Kay",
        "cases": 2283.0,
        "deaths": 249.0
    },
    {
        "state": "Oklahoma",
        "county": "Kingfisher",
        "cases": 325.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Kiowa",
        "cases": 179.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Latimer",
        "cases": 222.0,
        "deaths": 46.0
    },
    {
        "state": "Oklahoma",
        "county": "Le Flore",
        "cases": 400.0,
        "deaths": 12.0
    },
    {
        "state": "Oklahoma",
        "county": "Lincoln",
        "cases": 624.0,
        "deaths": 33.0
    },
    {
        "state": "Oklahoma",
        "county": "Logan",
        "cases": 621.0,
        "deaths": 21.0
    },
    {
        "state": "Oklahoma",
        "county": "Love",
        "cases": 114.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Major",
        "cases": 140.0,
        "deaths": 36.0
    },
    {
        "state": "Oklahoma",
        "county": "Marshall",
        "cases": 89.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Mayes",
        "cases": 961.0,
        "deaths": 148.0
    },
    {
        "state": "Oklahoma",
        "county": "McClain",
        "cases": 2261.0,
        "deaths": 40.0
    },
    {
        "state": "Oklahoma",
        "county": "McCurtain",
        "cases": 319.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "McIntosh",
        "cases": 130.0,
        "deaths": 1.0
    },
    {
        "state": "Oklahoma",
        "county": "Murray",
        "cases": 59.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Muskogee",
        "cases": 1272.0,
        "deaths": 198.0
    },
    {
        "state": "Oklahoma",
        "county": "Noble",
        "cases": 328.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Nowata",
        "cases": 810.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Okfuskee",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Oklahoma",
        "cases": 33615.0,
        "deaths": 1409.0
    },
    {
        "state": "Oklahoma",
        "county": "Okmulgee",
        "cases": 726.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Osage",
        "cases": 3260.0,
        "deaths": 340.0
    },
    {
        "state": "Oklahoma",
        "county": "Ottawa",
        "cases": 1318.0,
        "deaths": 34.0
    },
    {
        "state": "Oklahoma",
        "county": "Pawnee",
        "cases": 1417.0,
        "deaths": 99.0
    },
    {
        "state": "Oklahoma",
        "county": "Payne",
        "cases": 1892.0,
        "deaths": 25.0
    },
    {
        "state": "Oklahoma",
        "county": "Pittsburg",
        "cases": 1157.0,
        "deaths": 75.0
    },
    {
        "state": "Oklahoma",
        "county": "Pontotoc",
        "cases": 487.0,
        "deaths": 55.0
    },
    {
        "state": "Oklahoma",
        "county": "Pottawatomie",
        "cases": 1897.0,
        "deaths": 154.0
    },
    {
        "state": "Oklahoma",
        "county": "Pushmataha",
        "cases": 23.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Rogers",
        "cases": 2245.0,
        "deaths": 130.0
    },
    {
        "state": "Oklahoma",
        "county": "Seminole",
        "cases": 541.0,
        "deaths": 64.0
    },
    {
        "state": "Oklahoma",
        "county": "Sequoyah",
        "cases": 539.0,
        "deaths": 120.0
    },
    {
        "state": "Oklahoma",
        "county": "Stephens",
        "cases": 895.0,
        "deaths": 48.0
    },
    {
        "state": "Oklahoma",
        "county": "Texas",
        "cases": 8879.0,
        "deaths": 78.0
    },
    {
        "state": "Oklahoma",
        "county": "Tillman",
        "cases": 354.0,
        "deaths": 8.0
    },
    {
        "state": "Oklahoma",
        "county": "Tulsa",
        "cases": 24670.0,
        "deaths": 1290.0
    },
    {
        "state": "Oklahoma",
        "county": "Wagoner",
        "cases": 5022.0,
        "deaths": 538.0
    },
    {
        "state": "Oklahoma",
        "county": "Washington",
        "cases": 9478.0,
        "deaths": 716.0
    },
    {
        "state": "Oklahoma",
        "county": "Washita",
        "cases": 6.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Woods",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "Oklahoma",
        "county": "Woodward",
        "cases": 49.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Baker",
        "cases": 16.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Benton",
        "cases": 1652.0,
        "deaths": 192.0
    },
    {
        "state": "Oregon",
        "county": "Clackamas",
        "cases": 9479.0,
        "deaths": 302.0
    },
    {
        "state": "Oregon",
        "county": "Clatsop",
        "cases": 672.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Columbia",
        "cases": 616.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Coos",
        "cases": 645.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Crook",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Curry",
        "cases": 162.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Deschutes",
        "cases": 3575.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Douglas",
        "cases": 1046.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Grant",
        "cases": 61.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Harney",
        "cases": 22.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Hood River",
        "cases": 356.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Jackson",
        "cases": 2367.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Jefferson",
        "cases": 447.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Josephine",
        "cases": 1022.0,
        "deaths": 39.0
    },
    {
        "state": "Oregon",
        "county": "Klamath",
        "cases": 1585.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Lane",
        "cases": 2408.0,
        "deaths": 89.0
    },
    {
        "state": "Oregon",
        "county": "Lincoln",
        "cases": 255.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Linn",
        "cases": 4044.0,
        "deaths": 296.0
    },
    {
        "state": "Oregon",
        "county": "Malheur",
        "cases": 410.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Marion",
        "cases": 23193.0,
        "deaths": 759.0
    },
    {
        "state": "Oregon",
        "county": "Morrow",
        "cases": 343.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Multnomah",
        "cases": 30172.0,
        "deaths": 1678.0
    },
    {
        "state": "Oregon",
        "county": "Polk",
        "cases": 2465.0,
        "deaths": 134.0
    },
    {
        "state": "Oregon",
        "county": "Sherman",
        "cases": 45.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Tillamook",
        "cases": 268.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Umatilla",
        "cases": 2233.0,
        "deaths": 28.0
    },
    {
        "state": "Oregon",
        "county": "Union",
        "cases": 203.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Unknown",
        "cases": 173.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Wallowa",
        "cases": 52.0,
        "deaths": 0.0
    },
    {
        "state": "Oregon",
        "county": "Wasco",
        "cases": 599.0,
        "deaths": 24.0
    },
    {
        "state": "Oregon",
        "county": "Washington",
        "cases": 23268.0,
        "deaths": 496.0
    },
    {
        "state": "Oregon",
        "county": "Yamhill",
        "cases": 1961.0,
        "deaths": 299.0
    },
    {
        "state": "Pennsylvania",
        "county": "Adams",
        "cases": 5237.0,
        "deaths": 130.0
    },
    {
        "state": "Pennsylvania",
        "county": "Allegheny",
        "cases": 57191.0,
        "deaths": 3543.0
    },
    {
        "state": "Pennsylvania",
        "county": "Armstrong",
        "cases": 1959.0,
        "deaths": 100.0
    },
    {
        "state": "Pennsylvania",
        "county": "Beaver",
        "cases": 15911.0,
        "deaths": 2214.0
    },
    {
        "state": "Pennsylvania",
        "county": "Bedford",
        "cases": 878.0,
        "deaths": 40.0
    },
    {
        "state": "Pennsylvania",
        "county": "Berks",
        "cases": 104805.0,
        "deaths": 4621.0
    },
    {
        "state": "Pennsylvania",
        "county": "Blair",
        "cases": 956.0,
        "deaths": 2.0
    },
    {
        "state": "Pennsylvania",
        "county": "Bradford",
        "cases": 1349.0,
        "deaths": 147.0
    },
    {
        "state": "Pennsylvania",
        "county": "Bucks",
        "cases": 123393.0,
        "deaths": 8837.0
    },
    {
        "state": "Pennsylvania",
        "county": "Butler",
        "cases": 8041.0,
        "deaths": 264.0
    },
    {
        "state": "Pennsylvania",
        "county": "Cambria",
        "cases": 1253.0,
        "deaths": 72.0
    },
    {
        "state": "Pennsylvania",
        "county": "Cameron",
        "cases": 68.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Carbon",
        "cases": 7136.0,
        "deaths": 512.0
    },
    {
        "state": "Pennsylvania",
        "county": "Centre",
        "cases": 4364.0,
        "deaths": 86.0
    },
    {
        "state": "Pennsylvania",
        "county": "Chester",
        "cases": 58259.0,
        "deaths": 4513.0
    },
    {
        "state": "Pennsylvania",
        "county": "Clarion",
        "cases": 893.0,
        "deaths": 34.0
    },
    {
        "state": "Pennsylvania",
        "county": "Clearfield",
        "cases": 789.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Clinton",
        "cases": 1058.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Columbia",
        "cases": 10493.0,
        "deaths": 592.0
    },
    {
        "state": "Pennsylvania",
        "county": "Crawford",
        "cases": 821.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Cumberland",
        "cases": 13313.0,
        "deaths": 759.0
    },
    {
        "state": "Pennsylvania",
        "county": "Dauphin",
        "cases": 24565.0,
        "deaths": 936.0
    },
    {
        "state": "Pennsylvania",
        "county": "Delaware",
        "cases": 155916.0,
        "deaths": 9639.0
    },
    {
        "state": "Pennsylvania",
        "county": "Elk",
        "cases": 148.0,
        "deaths": 11.0
    },
    {
        "state": "Pennsylvania",
        "county": "Erie",
        "cases": 3724.0,
        "deaths": 76.0
    },
    {
        "state": "Pennsylvania",
        "county": "Fayette",
        "cases": 3346.0,
        "deaths": 153.0
    },
    {
        "state": "Pennsylvania",
        "county": "Forest",
        "cases": 294.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Franklin",
        "cases": 12502.0,
        "deaths": 353.0
    },
    {
        "state": "Pennsylvania",
        "county": "Fulton",
        "cases": 211.0,
        "deaths": 3.0
    },
    {
        "state": "Pennsylvania",
        "county": "Greene",
        "cases": 1179.0,
        "deaths": 15.0
    },
    {
        "state": "Pennsylvania",
        "county": "Huntingdon",
        "cases": 3068.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Indiana",
        "cases": 2670.0,
        "deaths": 150.0
    },
    {
        "state": "Pennsylvania",
        "county": "Jefferson",
        "cases": 188.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Juniata",
        "cases": 3172.0,
        "deaths": 23.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lackawanna",
        "cases": 37650.0,
        "deaths": 3234.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lancaster",
        "cases": 71386.0,
        "deaths": 6549.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lawrence",
        "cases": 2785.0,
        "deaths": 262.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lebanon",
        "cases": 26311.0,
        "deaths": 414.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lehigh",
        "cases": 116572.0,
        "deaths": 3185.0
    },
    {
        "state": "Pennsylvania",
        "county": "Luzerne",
        "cases": 89715.0,
        "deaths": 3197.0
    },
    {
        "state": "Pennsylvania",
        "county": "Lycoming",
        "cases": 3205.0,
        "deaths": 114.0
    },
    {
        "state": "Pennsylvania",
        "county": "McKean",
        "cases": 244.0,
        "deaths": 13.0
    },
    {
        "state": "Pennsylvania",
        "county": "Mercer",
        "cases": 2816.0,
        "deaths": 49.0
    },
    {
        "state": "Pennsylvania",
        "county": "Mifflin",
        "cases": 1448.0,
        "deaths": 2.0
    },
    {
        "state": "Pennsylvania",
        "county": "Monroe",
        "cases": 48883.0,
        "deaths": 2168.0
    },
    {
        "state": "Pennsylvania",
        "county": "Montgomery",
        "cases": 177224.0,
        "deaths": 13622.0
    },
    {
        "state": "Pennsylvania",
        "county": "Montour",
        "cases": 2137.0,
        "deaths": 3.0
    },
    {
        "state": "Pennsylvania",
        "county": "Northampton",
        "cases": 84644.0,
        "deaths": 3835.0
    },
    {
        "state": "Pennsylvania",
        "county": "Northumberland",
        "cases": 3863.0,
        "deaths": 4.0
    },
    {
        "state": "Pennsylvania",
        "county": "Perry",
        "cases": 1191.0,
        "deaths": 47.0
    },
    {
        "state": "Pennsylvania",
        "county": "Philadelphia",
        "cases": 580453.0,
        "deaths": 24600.0
    },
    {
        "state": "Pennsylvania",
        "county": "Pike",
        "cases": 15690.0,
        "deaths": 590.0
    },
    {
        "state": "Pennsylvania",
        "county": "Potter",
        "cases": 199.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Schuylkill",
        "cases": 15126.0,
        "deaths": 340.0
    },
    {
        "state": "Pennsylvania",
        "county": "Snyder",
        "cases": 1263.0,
        "deaths": 53.0
    },
    {
        "state": "Pennsylvania",
        "county": "Somerset",
        "cases": 1047.0,
        "deaths": 16.0
    },
    {
        "state": "Pennsylvania",
        "county": "Sullivan",
        "cases": 51.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Susquehanna",
        "cases": 2910.0,
        "deaths": 299.0
    },
    {
        "state": "Pennsylvania",
        "county": "Tioga",
        "cases": 649.0,
        "deaths": 68.0
    },
    {
        "state": "Pennsylvania",
        "county": "Union",
        "cases": 1416.0,
        "deaths": 15.0
    },
    {
        "state": "Pennsylvania",
        "county": "Unknown",
        "cases": 0.0,
        "deaths": 3.0
    },
    {
        "state": "Pennsylvania",
        "county": "Venango",
        "cases": 309.0,
        "deaths": 0.0
    },
    {
        "state": "Pennsylvania",
        "county": "Warren",
        "cases": 65.0,
        "deaths": 29.0
    },
    {
        "state": "Pennsylvania",
        "county": "Washington",
        "cases": 4794.0,
        "deaths": 95.0
    },
    {
        "state": "Pennsylvania",
        "county": "Wayne",
        "cases": 4159.0,
        "deaths": 157.0
    },
    {
        "state": "Pennsylvania",
        "county": "Westmoreland",
        "cases": 15602.0,
        "deaths": 1068.0
    },
    {
        "state": "Pennsylvania",
        "county": "Wyoming",
        "cases": 883.0,
        "deaths": 76.0
    },
    {
        "state": "Pennsylvania",
        "county": "York",
        "cases": 26455.0,
        "deaths": 455.0
    },
    {
        "state": "Puerto Rico",
        "county": "Unknown",
        "cases": 71061.0,
        "deaths": 3568.0
    },
    {
        "state": "Rhode Island",
        "county": "Bristol",
        "cases": 4954.0,
        "deaths": 9.0
    },
    {
        "state": "Rhode Island",
        "county": "Kent",
        "cases": 23509.0,
        "deaths": 638.0
    },
    {
        "state": "Rhode Island",
        "county": "Newport",
        "cases": 6094.0,
        "deaths": 68.0
    },
    {
        "state": "Rhode Island",
        "county": "Providence",
        "cases": 230394.0,
        "deaths": 6549.0
    },
    {
        "state": "Rhode Island",
        "county": "Unknown",
        "cases": 54926.0,
        "deaths": 3567.0
    },
    {
        "state": "Rhode Island",
        "county": "Washington",
        "cases": 12436.0,
        "deaths": 556.0
    },
    {
        "state": "South Carolina",
        "county": "Abbeville",
        "cases": 1102.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Aiken",
        "cases": 4188.0,
        "deaths": 216.0
    },
    {
        "state": "South Carolina",
        "county": "Allendale",
        "cases": 599.0,
        "deaths": 54.0
    },
    {
        "state": "South Carolina",
        "county": "Anderson",
        "cases": 7165.0,
        "deaths": 300.0
    },
    {
        "state": "South Carolina",
        "county": "Bamberg",
        "cases": 485.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Barnwell",
        "cases": 831.0,
        "deaths": 5.0
    },
    {
        "state": "South Carolina",
        "county": "Beaufort",
        "cases": 11863.0,
        "deaths": 423.0
    },
    {
        "state": "South Carolina",
        "county": "Berkeley",
        "cases": 6974.0,
        "deaths": 363.0
    },
    {
        "state": "South Carolina",
        "county": "Calhoun",
        "cases": 334.0,
        "deaths": 50.0
    },
    {
        "state": "South Carolina",
        "county": "Charleston",
        "cases": 20679.0,
        "deaths": 283.0
    },
    {
        "state": "South Carolina",
        "county": "Cherokee",
        "cases": 678.0,
        "deaths": 6.0
    },
    {
        "state": "South Carolina",
        "county": "Chester",
        "cases": 1327.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Chesterfield",
        "cases": 2376.0,
        "deaths": 20.0
    },
    {
        "state": "South Carolina",
        "county": "Clarendon",
        "cases": 8235.0,
        "deaths": 715.0
    },
    {
        "state": "South Carolina",
        "county": "Colleton",
        "cases": 1295.0,
        "deaths": 113.0
    },
    {
        "state": "South Carolina",
        "county": "Darlington",
        "cases": 5142.0,
        "deaths": 75.0
    },
    {
        "state": "South Carolina",
        "county": "Dillon",
        "cases": 2315.0,
        "deaths": 4.0
    },
    {
        "state": "South Carolina",
        "county": "Dorchester",
        "cases": 4231.0,
        "deaths": 86.0
    },
    {
        "state": "South Carolina",
        "county": "Edgefield",
        "cases": 1130.0,
        "deaths": 48.0
    },
    {
        "state": "South Carolina",
        "county": "Fairfield",
        "cases": 2341.0,
        "deaths": 104.0
    },
    {
        "state": "South Carolina",
        "county": "Florence",
        "cases": 12075.0,
        "deaths": 661.0
    },
    {
        "state": "South Carolina",
        "county": "Georgetown",
        "cases": 1896.0,
        "deaths": 102.0
    },
    {
        "state": "South Carolina",
        "county": "Greenville",
        "cases": 30340.0,
        "deaths": 1167.0
    },
    {
        "state": "South Carolina",
        "county": "Greenwood",
        "cases": 2023.0,
        "deaths": 6.0
    },
    {
        "state": "South Carolina",
        "county": "Hampton",
        "cases": 909.0,
        "deaths": 4.0
    },
    {
        "state": "South Carolina",
        "county": "Horry",
        "cases": 9597.0,
        "deaths": 630.0
    },
    {
        "state": "South Carolina",
        "county": "Jasper",
        "cases": 877.0,
        "deaths": 31.0
    },
    {
        "state": "South Carolina",
        "county": "Kershaw",
        "cases": 11346.0,
        "deaths": 416.0
    },
    {
        "state": "South Carolina",
        "county": "Lancaster",
        "cases": 4084.0,
        "deaths": 132.0
    },
    {
        "state": "South Carolina",
        "county": "Laurens",
        "cases": 1432.0,
        "deaths": 66.0
    },
    {
        "state": "South Carolina",
        "county": "Lee",
        "cases": 3124.0,
        "deaths": 285.0
    },
    {
        "state": "South Carolina",
        "county": "Lexington",
        "cases": 15974.0,
        "deaths": 658.0
    },
    {
        "state": "South Carolina",
        "county": "Marion",
        "cases": 1285.0,
        "deaths": 88.0
    },
    {
        "state": "South Carolina",
        "county": "Marlboro",
        "cases": 1794.0,
        "deaths": 9.0
    },
    {
        "state": "South Carolina",
        "county": "McCormick",
        "cases": 251.0,
        "deaths": 43.0
    },
    {
        "state": "South Carolina",
        "county": "Newberry",
        "cases": 1078.0,
        "deaths": 42.0
    },
    {
        "state": "South Carolina",
        "county": "Oconee",
        "cases": 1139.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Orangeburg",
        "cases": 3296.0,
        "deaths": 44.0
    },
    {
        "state": "South Carolina",
        "county": "Pickens",
        "cases": 2486.0,
        "deaths": 32.0
    },
    {
        "state": "South Carolina",
        "county": "Richland",
        "cases": 38463.0,
        "deaths": 1401.0
    },
    {
        "state": "South Carolina",
        "county": "Saluda",
        "cases": 2124.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Spartanburg",
        "cases": 12113.0,
        "deaths": 373.0
    },
    {
        "state": "South Carolina",
        "county": "Sumter",
        "cases": 10330.0,
        "deaths": 418.0
    },
    {
        "state": "South Carolina",
        "county": "Union",
        "cases": 1156.0,
        "deaths": 0.0
    },
    {
        "state": "South Carolina",
        "county": "Williamsburg",
        "cases": 3313.0,
        "deaths": 122.0
    },
    {
        "state": "South Carolina",
        "county": "York",
        "cases": 9201.0,
        "deaths": 164.0
    },
    {
        "state": "South Dakota",
        "county": "Aurora",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Beadle",
        "cases": 1266.0,
        "deaths": 89.0
    },
    {
        "state": "South Dakota",
        "county": "Bon Homme",
        "cases": 195.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Brookings",
        "cases": 503.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Brown",
        "cases": 2894.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Buffalo",
        "cases": 24.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Charles Mix",
        "cases": 238.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Clark",
        "cases": 78.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Clay",
        "cases": 340.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Codington",
        "cases": 674.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Corson",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Davison",
        "cases": 300.0,
        "deaths": 71.0
    },
    {
        "state": "South Dakota",
        "county": "Day",
        "cases": 181.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Deuel",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Douglas",
        "cases": 23.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Fall River",
        "cases": 70.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Faulk",
        "cases": 54.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Grant",
        "cases": 69.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Hamlin",
        "cases": 90.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Hand",
        "cases": 24.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Hughes",
        "cases": 431.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Hutchinson",
        "cases": 130.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Hyde",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Jerauld",
        "cases": 206.0,
        "deaths": 26.0
    },
    {
        "state": "South Dakota",
        "county": "Lake",
        "cases": 162.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Lawrence",
        "cases": 456.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Lincoln",
        "cases": 5637.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Lyman",
        "cases": 130.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Marshall",
        "cases": 53.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "McCook",
        "cases": 196.0,
        "deaths": 41.0
    },
    {
        "state": "South Dakota",
        "county": "McPherson",
        "cases": 25.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Meade",
        "cases": 99.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Miner",
        "cases": 40.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Minnehaha",
        "cases": 80280.0,
        "deaths": 639.0
    },
    {
        "state": "South Dakota",
        "county": "Moody",
        "cases": 272.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Oglala Lakota",
        "cases": 87.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Pennington",
        "cases": 871.0,
        "deaths": 1.0
    },
    {
        "state": "South Dakota",
        "county": "Roberts",
        "cases": 379.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Sanborn",
        "cases": 122.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Spink",
        "cases": 150.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Stanley",
        "cases": 183.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Sully",
        "cases": 38.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Todd",
        "cases": 222.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Tripp",
        "cases": 10.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Turner",
        "cases": 568.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Union",
        "cases": 1129.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Unknown",
        "cases": 0.0,
        "deaths": 10.0
    },
    {
        "state": "South Dakota",
        "county": "Walworth",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Yankton",
        "cases": 1249.0,
        "deaths": 0.0
    },
    {
        "state": "South Dakota",
        "county": "Ziebach",
        "cases": 14.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Anderson",
        "cases": 1153.0,
        "deaths": 42.0
    },
    {
        "state": "Tennessee",
        "county": "Bedford",
        "cases": 6314.0,
        "deaths": 99.0
    },
    {
        "state": "Tennessee",
        "county": "Benton",
        "cases": 270.0,
        "deaths": 27.0
    },
    {
        "state": "Tennessee",
        "county": "Bledsoe",
        "cases": 16203.0,
        "deaths": 8.0
    },
    {
        "state": "Tennessee",
        "county": "Blount",
        "cases": 2771.0,
        "deaths": 129.0
    },
    {
        "state": "Tennessee",
        "county": "Bradley",
        "cases": 2369.0,
        "deaths": 36.0
    },
    {
        "state": "Tennessee",
        "county": "Campbell",
        "cases": 671.0,
        "deaths": 35.0
    },
    {
        "state": "Tennessee",
        "county": "Cannon",
        "cases": 494.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Carroll",
        "cases": 799.0,
        "deaths": 30.0
    },
    {
        "state": "Tennessee",
        "county": "Carter",
        "cases": 491.0,
        "deaths": 35.0
    },
    {
        "state": "Tennessee",
        "county": "Cheatham",
        "cases": 2063.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Chester",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Claiborne",
        "cases": 255.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Clay",
        "cases": 214.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Cocke",
        "cases": 596.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Coffee",
        "cases": 1482.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Crockett",
        "cases": 272.0,
        "deaths": 7.0
    },
    {
        "state": "Tennessee",
        "county": "Cumberland",
        "cases": 3121.0,
        "deaths": 22.0
    },
    {
        "state": "Tennessee",
        "county": "Davidson",
        "cases": 120535.0,
        "deaths": 1209.0
    },
    {
        "state": "Tennessee",
        "county": "DeKalb",
        "cases": 806.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Decatur",
        "cases": 161.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Dickson",
        "cases": 2965.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Dyer",
        "cases": 1445.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Fayette",
        "cases": 2641.0,
        "deaths": 41.0
    },
    {
        "state": "Tennessee",
        "county": "Fentress",
        "cases": 196.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Franklin",
        "cases": 1443.0,
        "deaths": 47.0
    },
    {
        "state": "Tennessee",
        "county": "Gibson",
        "cases": 1782.0,
        "deaths": 28.0
    },
    {
        "state": "Tennessee",
        "county": "Giles",
        "cases": 311.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Grainger",
        "cases": 232.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Greene",
        "cases": 1800.0,
        "deaths": 85.0
    },
    {
        "state": "Tennessee",
        "county": "Grundy",
        "cases": 1216.0,
        "deaths": 36.0
    },
    {
        "state": "Tennessee",
        "county": "Hamblen",
        "cases": 693.0,
        "deaths": 68.0
    },
    {
        "state": "Tennessee",
        "county": "Hamilton",
        "cases": 8488.0,
        "deaths": 576.0
    },
    {
        "state": "Tennessee",
        "county": "Hancock",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Hardeman",
        "cases": 2308.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Hardin",
        "cases": 253.0,
        "deaths": 1.0
    },
    {
        "state": "Tennessee",
        "county": "Hawkins",
        "cases": 1276.0,
        "deaths": 86.0
    },
    {
        "state": "Tennessee",
        "county": "Haywood",
        "cases": 861.0,
        "deaths": 40.0
    },
    {
        "state": "Tennessee",
        "county": "Henderson",
        "cases": 286.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Henry",
        "cases": 526.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Hickman",
        "cases": 1275.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Houston",
        "cases": 223.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Humphreys",
        "cases": 384.0,
        "deaths": 25.0
    },
    {
        "state": "Tennessee",
        "county": "Jackson",
        "cases": 334.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Jefferson",
        "cases": 946.0,
        "deaths": 2.0
    },
    {
        "state": "Tennessee",
        "county": "Johnson",
        "cases": 238.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Knox",
        "cases": 10661.0,
        "deaths": 201.0
    },
    {
        "state": "Tennessee",
        "county": "Lake",
        "cases": 3866.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Lauderdale",
        "cases": 954.0,
        "deaths": 2.0
    },
    {
        "state": "Tennessee",
        "county": "Lawrence",
        "cases": 735.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Lewis",
        "cases": 111.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Lincoln",
        "cases": 566.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Loudon",
        "cases": 1528.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Macon",
        "cases": 2000.0,
        "deaths": 119.0
    },
    {
        "state": "Tennessee",
        "county": "Madison",
        "cases": 5005.0,
        "deaths": 37.0
    },
    {
        "state": "Tennessee",
        "county": "Marion",
        "cases": 1316.0,
        "deaths": 49.0
    },
    {
        "state": "Tennessee",
        "county": "Marshall",
        "cases": 867.0,
        "deaths": 40.0
    },
    {
        "state": "Tennessee",
        "county": "Maury",
        "cases": 2076.0,
        "deaths": 29.0
    },
    {
        "state": "Tennessee",
        "county": "McMinn",
        "cases": 2641.0,
        "deaths": 122.0
    },
    {
        "state": "Tennessee",
        "county": "McNairy",
        "cases": 462.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Meigs",
        "cases": 450.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Monroe",
        "cases": 942.0,
        "deaths": 35.0
    },
    {
        "state": "Tennessee",
        "county": "Montgomery",
        "cases": 6402.0,
        "deaths": 88.0
    },
    {
        "state": "Tennessee",
        "county": "Moore",
        "cases": 95.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Morgan",
        "cases": 330.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Obion",
        "cases": 540.0,
        "deaths": 48.0
    },
    {
        "state": "Tennessee",
        "county": "Overton",
        "cases": 414.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Perry",
        "cases": 412.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Pickett",
        "cases": 12.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Polk",
        "cases": 370.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Putnam",
        "cases": 6331.0,
        "deaths": 151.0
    },
    {
        "state": "Tennessee",
        "county": "Rhea",
        "cases": 172.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Roane",
        "cases": 356.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Robertson",
        "cases": 7304.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Rutherford",
        "cases": 22302.0,
        "deaths": 468.0
    },
    {
        "state": "Tennessee",
        "county": "Scott",
        "cases": 486.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Sequatchie",
        "cases": 217.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Sevier",
        "cases": 2027.0,
        "deaths": 48.0
    },
    {
        "state": "Tennessee",
        "county": "Shelby",
        "cases": 109182.0,
        "deaths": 2234.0
    },
    {
        "state": "Tennessee",
        "county": "Smith",
        "cases": 786.0,
        "deaths": 35.0
    },
    {
        "state": "Tennessee",
        "county": "Stewart",
        "cases": 261.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Sullivan",
        "cases": 2235.0,
        "deaths": 56.0
    },
    {
        "state": "Tennessee",
        "county": "Sumner",
        "cases": 27846.0,
        "deaths": 1481.0
    },
    {
        "state": "Tennessee",
        "county": "Tipton",
        "cases": 6912.0,
        "deaths": 30.0
    },
    {
        "state": "Tennessee",
        "county": "Trousdale",
        "cases": 26444.0,
        "deaths": 77.0
    },
    {
        "state": "Tennessee",
        "county": "Unicoi",
        "cases": 84.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Union",
        "cases": 142.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Unknown",
        "cases": 3154.0,
        "deaths": 59.0
    },
    {
        "state": "Tennessee",
        "county": "Van Buren",
        "cases": 69.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Warren",
        "cases": 337.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Washington",
        "cases": 2470.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Wayne",
        "cases": 432.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Weakley",
        "cases": 710.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "White",
        "cases": 410.0,
        "deaths": 0.0
    },
    {
        "state": "Tennessee",
        "county": "Williamson",
        "cases": 19180.0,
        "deaths": 335.0
    },
    {
        "state": "Tennessee",
        "county": "Wilson",
        "cases": 10560.0,
        "deaths": 162.0
    },
    {
        "state": "Texas",
        "county": "Anderson",
        "cases": 1072.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Andrews",
        "cases": 804.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Angelina",
        "cases": 2635.0,
        "deaths": 8.0
    },
    {
        "state": "Texas",
        "county": "Aransas",
        "cases": 92.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Archer",
        "cases": 5.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Armstrong",
        "cases": 61.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Atascosa",
        "cases": 754.0,
        "deaths": 32.0
    },
    {
        "state": "Texas",
        "county": "Austin",
        "cases": 588.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bailey",
        "cases": 57.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bandera",
        "cases": 195.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bastrop",
        "cases": 3238.0,
        "deaths": 77.0
    },
    {
        "state": "Texas",
        "county": "Bee",
        "cases": 210.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bell",
        "cases": 7828.0,
        "deaths": 140.0
    },
    {
        "state": "Texas",
        "county": "Bexar",
        "cases": 63111.0,
        "deaths": 2010.0
    },
    {
        "state": "Texas",
        "county": "Blanco",
        "cases": 244.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bosque",
        "cases": 140.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Bowie",
        "cases": 3937.0,
        "deaths": 345.0
    },
    {
        "state": "Texas",
        "county": "Brazoria",
        "cases": 21581.0,
        "deaths": 243.0
    },
    {
        "state": "Texas",
        "county": "Brazos",
        "cases": 9666.0,
        "deaths": 692.0
    },
    {
        "state": "Texas",
        "county": "Brewster",
        "cases": 19.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Briscoe",
        "cases": 18.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Brooks",
        "cases": 28.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Brown",
        "cases": 1222.0,
        "deaths": 142.0
    },
    {
        "state": "Texas",
        "county": "Burleson",
        "cases": 514.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Burnet",
        "cases": 751.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Caldwell",
        "cases": 743.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Calhoun",
        "cases": 1226.0,
        "deaths": 82.0
    },
    {
        "state": "Texas",
        "county": "Callahan",
        "cases": 129.0,
        "deaths": 13.0
    },
    {
        "state": "Texas",
        "county": "Cameron",
        "cases": 16799.0,
        "deaths": 604.0
    },
    {
        "state": "Texas",
        "county": "Camp",
        "cases": 337.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Carson",
        "cases": 75.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Cass",
        "cases": 640.0,
        "deaths": 66.0
    },
    {
        "state": "Texas",
        "county": "Castro",
        "cases": 804.0,
        "deaths": 46.0
    },
    {
        "state": "Texas",
        "county": "Chambers",
        "cases": 1842.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Cherokee",
        "cases": 691.0,
        "deaths": 37.0
    },
    {
        "state": "Texas",
        "county": "Childress",
        "cases": 41.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Clay",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Cochran",
        "cases": 27.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Coke",
        "cases": 15.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Coleman",
        "cases": 31.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Collin",
        "cases": 33011.0,
        "deaths": 831.0
    },
    {
        "state": "Texas",
        "county": "Collingsworth",
        "cases": 45.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Colorado",
        "cases": 485.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Comal",
        "cases": 2420.0,
        "deaths": 263.0
    },
    {
        "state": "Texas",
        "county": "Comanche",
        "cases": 137.0,
        "deaths": 20.0
    },
    {
        "state": "Texas",
        "county": "Concho",
        "cases": 40.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Cooke",
        "cases": 280.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Coryell",
        "cases": 5490.0,
        "deaths": 55.0
    },
    {
        "state": "Texas",
        "county": "Cottle",
        "cases": 70.0,
        "deaths": 11.0
    },
    {
        "state": "Texas",
        "county": "Crane",
        "cases": 111.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Crosby",
        "cases": 72.0,
        "deaths": 35.0
    },
    {
        "state": "Texas",
        "county": "Dallam",
        "cases": 371.0,
        "deaths": 16.0
    },
    {
        "state": "Texas",
        "county": "Dallas",
        "cases": 176433.0,
        "deaths": 4259.0
    },
    {
        "state": "Texas",
        "county": "Dawson",
        "cases": 919.0,
        "deaths": 41.0
    },
    {
        "state": "Texas",
        "county": "DeWitt",
        "cases": 641.0,
        "deaths": 29.0
    },
    {
        "state": "Texas",
        "county": "Deaf Smith",
        "cases": 1721.0,
        "deaths": 32.0
    },
    {
        "state": "Texas",
        "county": "Delta",
        "cases": 42.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Denton",
        "cases": 34621.0,
        "deaths": 892.0
    },
    {
        "state": "Texas",
        "county": "Dickens",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Dimmit",
        "cases": 39.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Donley",
        "cases": 1029.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Duval",
        "cases": 101.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Eastland",
        "cases": 175.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Ector",
        "cases": 3397.0,
        "deaths": 145.0
    },
    {
        "state": "Texas",
        "county": "El Paso",
        "cases": 39165.0,
        "deaths": 831.0
    },
    {
        "state": "Texas",
        "county": "Ellis",
        "cases": 6489.0,
        "deaths": 281.0
    },
    {
        "state": "Texas",
        "county": "Erath",
        "cases": 573.0,
        "deaths": 47.0
    },
    {
        "state": "Texas",
        "county": "Falls",
        "cases": 155.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Fannin",
        "cases": 668.0,
        "deaths": 18.0
    },
    {
        "state": "Texas",
        "county": "Fayette",
        "cases": 871.0,
        "deaths": 32.0
    },
    {
        "state": "Texas",
        "county": "Fisher",
        "cases": 6.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Floyd",
        "cases": 120.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Fort Bend",
        "cases": 45951.0,
        "deaths": 1093.0
    },
    {
        "state": "Texas",
        "county": "Franklin",
        "cases": 97.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Freestone",
        "cases": 173.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Frio",
        "cases": 527.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Gaines",
        "cases": 122.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Galveston",
        "cases": 25176.0,
        "deaths": 933.0
    },
    {
        "state": "Texas",
        "county": "Garza",
        "cases": 64.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Gillespie",
        "cases": 129.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Glasscock",
        "cases": 20.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Goliad",
        "cases": 262.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Gonzales",
        "cases": 1095.0,
        "deaths": 47.0
    },
    {
        "state": "Texas",
        "county": "Gray",
        "cases": 1993.0,
        "deaths": 1.0
    },
    {
        "state": "Texas",
        "county": "Grayson",
        "cases": 2307.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Gregg",
        "cases": 3675.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Grimes",
        "cases": 1064.0,
        "deaths": 34.0
    },
    {
        "state": "Texas",
        "county": "Guadalupe",
        "cases": 3409.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Hale",
        "cases": 1072.0,
        "deaths": 136.0
    },
    {
        "state": "Texas",
        "county": "Hamilton",
        "cases": 204.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Hansford",
        "cases": 275.0,
        "deaths": 31.0
    },
    {
        "state": "Texas",
        "county": "Hardin",
        "cases": 4132.0,
        "deaths": 131.0
    },
    {
        "state": "Texas",
        "county": "Harris",
        "cases": 273742.0,
        "deaths": 5000.0
    },
    {
        "state": "Texas",
        "county": "Harrison",
        "cases": 4437.0,
        "deaths": 246.0
    },
    {
        "state": "Texas",
        "county": "Hartley",
        "cases": 179.0,
        "deaths": 29.0
    },
    {
        "state": "Texas",
        "county": "Haskell",
        "cases": 6.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Hays",
        "cases": 7186.0,
        "deaths": 57.0
    },
    {
        "state": "Texas",
        "county": "Hemphill",
        "cases": 46.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Henderson",
        "cases": 1105.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Hidalgo",
        "cases": 13795.0,
        "deaths": 222.0
    },
    {
        "state": "Texas",
        "county": "Hill",
        "cases": 653.0,
        "deaths": 34.0
    },
    {
        "state": "Texas",
        "county": "Hockley",
        "cases": 881.0,
        "deaths": 47.0
    },
    {
        "state": "Texas",
        "county": "Hood",
        "cases": 841.0,
        "deaths": 117.0
    },
    {
        "state": "Texas",
        "county": "Hopkins",
        "cases": 261.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Houston",
        "cases": 631.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Howard",
        "cases": 148.0,
        "deaths": 39.0
    },
    {
        "state": "Texas",
        "county": "Hunt",
        "cases": 1810.0,
        "deaths": 90.0
    },
    {
        "state": "Texas",
        "county": "Hutchinson",
        "cases": 575.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Jack",
        "cases": 147.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Jackson",
        "cases": 401.0,
        "deaths": 6.0
    },
    {
        "state": "Texas",
        "county": "Jasper",
        "cases": 670.0,
        "deaths": 49.0
    },
    {
        "state": "Texas",
        "county": "Jefferson",
        "cases": 11868.0,
        "deaths": 724.0
    },
    {
        "state": "Texas",
        "county": "Jim Hogg",
        "cases": 75.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Jim Wells",
        "cases": 179.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Johnson",
        "cases": 3598.0,
        "deaths": 103.0
    },
    {
        "state": "Texas",
        "county": "Jones",
        "cases": 1891.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Karnes",
        "cases": 147.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Kaufman",
        "cases": 3410.0,
        "deaths": 21.0
    },
    {
        "state": "Texas",
        "county": "Kendall",
        "cases": 766.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Kerr",
        "cases": 247.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Kimble",
        "cases": 12.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Kleberg",
        "cases": 346.0,
        "deaths": 37.0
    },
    {
        "state": "Texas",
        "county": "Knox",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "La Salle",
        "cases": 58.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Lamar",
        "cases": 2041.0,
        "deaths": 55.0
    },
    {
        "state": "Texas",
        "county": "Lamb",
        "cases": 187.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Lampasas",
        "cases": 198.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Lavaca",
        "cases": 251.0,
        "deaths": 25.0
    },
    {
        "state": "Texas",
        "county": "Lee",
        "cases": 139.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Leon",
        "cases": 266.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Liberty",
        "cases": 1866.0,
        "deaths": 25.0
    },
    {
        "state": "Texas",
        "county": "Limestone",
        "cases": 548.0,
        "deaths": 46.0
    },
    {
        "state": "Texas",
        "county": "Lipscomb",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Live Oak",
        "cases": 207.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Llano",
        "cases": 162.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Lubbock",
        "cases": 21675.0,
        "deaths": 1624.0
    },
    {
        "state": "Texas",
        "county": "Lynn",
        "cases": 232.0,
        "deaths": 29.0
    },
    {
        "state": "Texas",
        "county": "Madison",
        "cases": 109.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Marion",
        "cases": 387.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Martin",
        "cases": 113.0,
        "deaths": 15.0
    },
    {
        "state": "Texas",
        "county": "Mason",
        "cases": 585.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Matagorda",
        "cases": 2858.0,
        "deaths": 186.0
    },
    {
        "state": "Texas",
        "county": "Maverick",
        "cases": 1085.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "McCulloch",
        "cases": 120.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "McLennan",
        "cases": 4259.0,
        "deaths": 163.0
    },
    {
        "state": "Texas",
        "county": "Medina",
        "cases": 1040.0,
        "deaths": 75.0
    },
    {
        "state": "Texas",
        "county": "Midland",
        "cases": 3376.0,
        "deaths": 284.0
    },
    {
        "state": "Texas",
        "county": "Milam",
        "cases": 652.0,
        "deaths": 26.0
    },
    {
        "state": "Texas",
        "county": "Mills",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Mitchell",
        "cases": 43.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Montague",
        "cases": 275.0,
        "deaths": 29.0
    },
    {
        "state": "Texas",
        "county": "Montgomery",
        "cases": 24077.0,
        "deaths": 495.0
    },
    {
        "state": "Texas",
        "county": "Moore",
        "cases": 12241.0,
        "deaths": 182.0
    },
    {
        "state": "Texas",
        "county": "Morris",
        "cases": 286.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Motley",
        "cases": 37.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Nacogdoches",
        "cases": 5982.0,
        "deaths": 313.0
    },
    {
        "state": "Texas",
        "county": "Navarro",
        "cases": 1182.0,
        "deaths": 93.0
    },
    {
        "state": "Texas",
        "county": "Newton",
        "cases": 116.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Nolan",
        "cases": 44.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Nueces",
        "cases": 5541.0,
        "deaths": 79.0
    },
    {
        "state": "Texas",
        "county": "Ochiltree",
        "cases": 670.0,
        "deaths": 31.0
    },
    {
        "state": "Texas",
        "county": "Oldham",
        "cases": 157.0,
        "deaths": 56.0
    },
    {
        "state": "Texas",
        "county": "Orange",
        "cases": 2842.0,
        "deaths": 36.0
    },
    {
        "state": "Texas",
        "county": "Palo Pinto",
        "cases": 305.0,
        "deaths": 53.0
    },
    {
        "state": "Texas",
        "county": "Panola",
        "cases": 3773.0,
        "deaths": 229.0
    },
    {
        "state": "Texas",
        "county": "Parker",
        "cases": 1378.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Parmer",
        "cases": 409.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Pecos",
        "cases": 414.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Polk",
        "cases": 1047.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Potter",
        "cases": 30166.0,
        "deaths": 405.0
    },
    {
        "state": "Texas",
        "county": "Rains",
        "cases": 75.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Randall",
        "cases": 10746.0,
        "deaths": 130.0
    },
    {
        "state": "Texas",
        "county": "Red River",
        "cases": 311.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Reeves",
        "cases": 22.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Refugio",
        "cases": 31.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Roberts",
        "cases": 68.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Robertson",
        "cases": 171.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Rockwall",
        "cases": 3012.0,
        "deaths": 77.0
    },
    {
        "state": "Texas",
        "county": "Runnels",
        "cases": 40.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Rusk",
        "cases": 1393.0,
        "deaths": 34.0
    },
    {
        "state": "Texas",
        "county": "Sabine",
        "cases": 63.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "San Augustine",
        "cases": 715.0,
        "deaths": 47.0
    },
    {
        "state": "Texas",
        "county": "San Jacinto",
        "cases": 405.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "San Patricio",
        "cases": 611.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "San Saba",
        "cases": 1.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Scurry",
        "cases": 80.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Shackelford",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Shelby",
        "cases": 4340.0,
        "deaths": 90.0
    },
    {
        "state": "Texas",
        "county": "Sherman",
        "cases": 542.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Smith",
        "cases": 6626.0,
        "deaths": 151.0
    },
    {
        "state": "Texas",
        "county": "Starr",
        "cases": 463.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Stephens",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Swisher",
        "cases": 357.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Tarrant",
        "cases": 100942.0,
        "deaths": 2891.0
    },
    {
        "state": "Texas",
        "county": "Taylor",
        "cases": 10653.0,
        "deaths": 166.0
    },
    {
        "state": "Texas",
        "county": "Terry",
        "cases": 478.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Titus",
        "cases": 1183.0,
        "deaths": 5.0
    },
    {
        "state": "Texas",
        "county": "Tom Green",
        "cases": 2123.0,
        "deaths": 40.0
    },
    {
        "state": "Texas",
        "county": "Travis",
        "cases": 70465.0,
        "deaths": 1832.0
    },
    {
        "state": "Texas",
        "county": "Trinity",
        "cases": 338.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Tyler",
        "cases": 262.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Upshur",
        "cases": 579.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Uvalde",
        "cases": 317.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Val Verde",
        "cases": 590.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Van Zandt",
        "cases": 669.0,
        "deaths": 52.0
    },
    {
        "state": "Texas",
        "county": "Victoria",
        "cases": 5263.0,
        "deaths": 131.0
    },
    {
        "state": "Texas",
        "county": "Walker",
        "cases": 8827.0,
        "deaths": 177.0
    },
    {
        "state": "Texas",
        "county": "Waller",
        "cases": 1277.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Washington",
        "cases": 4831.0,
        "deaths": 500.0
    },
    {
        "state": "Texas",
        "county": "Webb",
        "cases": 15139.0,
        "deaths": 608.0
    },
    {
        "state": "Texas",
        "county": "Wharton",
        "cases": 1616.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Wheeler",
        "cases": 271.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Wichita",
        "cases": 3223.0,
        "deaths": 67.0
    },
    {
        "state": "Texas",
        "county": "Wilbarger",
        "cases": 66.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Willacy",
        "cases": 494.0,
        "deaths": 46.0
    },
    {
        "state": "Texas",
        "county": "Williamson",
        "cases": 12220.0,
        "deaths": 403.0
    },
    {
        "state": "Texas",
        "county": "Wilson",
        "cases": 1159.0,
        "deaths": 101.0
    },
    {
        "state": "Texas",
        "county": "Winkler",
        "cases": 108.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Wise",
        "cases": 825.0,
        "deaths": 67.0
    },
    {
        "state": "Texas",
        "county": "Wood",
        "cases": 414.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Yoakum",
        "cases": 47.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Young",
        "cases": 187.0,
        "deaths": 35.0
    },
    {
        "state": "Texas",
        "county": "Zapata",
        "cases": 253.0,
        "deaths": 0.0
    },
    {
        "state": "Texas",
        "county": "Zavala",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Box Elder",
        "cases": 851.0,
        "deaths": 30.0
    },
    {
        "state": "Utah",
        "county": "Cache",
        "cases": 2051.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Carbon",
        "cases": 231.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Davis",
        "cases": 13119.0,
        "deaths": 106.0
    },
    {
        "state": "Utah",
        "county": "Duchesne",
        "cases": 260.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Emery",
        "cases": 181.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Garfield",
        "cases": 99.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Grand",
        "cases": 108.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Iron",
        "cases": 1033.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Juab",
        "cases": 241.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Kane",
        "cases": 134.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Millard",
        "cases": 219.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Morgan",
        "cases": 363.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Piute",
        "cases": 13.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Salt Lake",
        "cases": 106244.0,
        "deaths": 1217.0
    },
    {
        "state": "Utah",
        "county": "San Juan",
        "cases": 3360.0,
        "deaths": 82.0
    },
    {
        "state": "Utah",
        "county": "Sanpete",
        "cases": 163.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Sevier",
        "cases": 215.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Summit",
        "cases": 17781.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Tooele",
        "cases": 2664.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Uintah",
        "cases": 280.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Unknown",
        "cases": 279.0,
        "deaths": 153.0
    },
    {
        "state": "Utah",
        "county": "Utah",
        "cases": 38355.0,
        "deaths": 287.0
    },
    {
        "state": "Utah",
        "county": "Wasatch",
        "cases": 6878.0,
        "deaths": 39.0
    },
    {
        "state": "Utah",
        "county": "Washington",
        "cases": 3674.0,
        "deaths": 0.0
    },
    {
        "state": "Utah",
        "county": "Weber",
        "cases": 6785.0,
        "deaths": 84.0
    },
    {
        "state": "Vermont",
        "county": "Addison",
        "cases": 2874.0,
        "deaths": 70.0
    },
    {
        "state": "Vermont",
        "county": "Bennington",
        "cases": 2193.0,
        "deaths": 42.0
    },
    {
        "state": "Vermont",
        "county": "Caledonia",
        "cases": 561.0,
        "deaths": 0.0
    },
    {
        "state": "Vermont",
        "county": "Chittenden",
        "cases": 19500.0,
        "deaths": 1324.0
    },
    {
        "state": "Vermont",
        "county": "Essex",
        "cases": 75.0,
        "deaths": 0.0
    },
    {
        "state": "Vermont",
        "county": "Franklin",
        "cases": 4009.0,
        "deaths": 182.0
    },
    {
        "state": "Vermont",
        "county": "Grand Isle",
        "cases": 142.0,
        "deaths": 0.0
    },
    {
        "state": "Vermont",
        "county": "Lamoille",
        "cases": 1208.0,
        "deaths": 42.0
    },
    {
        "state": "Vermont",
        "county": "Orange",
        "cases": 349.0,
        "deaths": 0.0
    },
    {
        "state": "Vermont",
        "county": "Orleans",
        "cases": 456.0,
        "deaths": 0.0
    },
    {
        "state": "Vermont",
        "county": "Rutland",
        "cases": 2074.0,
        "deaths": 34.0
    },
    {
        "state": "Vermont",
        "county": "Unknown",
        "cases": 547.0,
        "deaths": 121.0
    },
    {
        "state": "Vermont",
        "county": "Washington",
        "cases": 1620.0,
        "deaths": 34.0
    },
    {
        "state": "Vermont",
        "county": "Windham",
        "cases": 3062.0,
        "deaths": 96.0
    },
    {
        "state": "Vermont",
        "county": "Windsor",
        "cases": 1958.0,
        "deaths": 104.0
    },
    {
        "state": "Virgin Islands",
        "county": "Unknown",
        "cases": 3028.0,
        "deaths": 150.0
    },
    {
        "state": "Virginia",
        "county": "Accomack",
        "cases": 11764.0,
        "deaths": 166.0
    },
    {
        "state": "Virginia",
        "county": "Albemarle",
        "cases": 4026.0,
        "deaths": 109.0
    },
    {
        "state": "Virginia",
        "county": "Alexandria city",
        "cases": 32365.0,
        "deaths": 774.0
    },
    {
        "state": "Virginia",
        "county": "Alleghany",
        "cases": 237.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Amelia",
        "cases": 660.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Amherst",
        "cases": 622.0,
        "deaths": 4.0
    },
    {
        "state": "Virginia",
        "county": "Appomattox",
        "cases": 645.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Arlington",
        "cases": 40758.0,
        "deaths": 1576.0
    },
    {
        "state": "Virginia",
        "county": "Augusta",
        "cases": 1820.0,
        "deaths": 27.0
    },
    {
        "state": "Virginia",
        "county": "Bedford",
        "cases": 1204.0,
        "deaths": 13.0
    },
    {
        "state": "Virginia",
        "county": "Botetourt",
        "cases": 1221.0,
        "deaths": 87.0
    },
    {
        "state": "Virginia",
        "county": "Bristol city",
        "cases": 81.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Brunswick",
        "cases": 567.0,
        "deaths": 5.0
    },
    {
        "state": "Virginia",
        "county": "Buchanan",
        "cases": 536.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Buckingham",
        "cases": 5716.0,
        "deaths": 20.0
    },
    {
        "state": "Virginia",
        "county": "Buena Vista city",
        "cases": 265.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Campbell",
        "cases": 479.0,
        "deaths": 6.0
    },
    {
        "state": "Virginia",
        "county": "Caroline",
        "cases": 1043.0,
        "deaths": 31.0
    },
    {
        "state": "Virginia",
        "county": "Carroll",
        "cases": 683.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Charles City",
        "cases": 645.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Charlotte",
        "cases": 349.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Charlottesville city",
        "cases": 2424.0,
        "deaths": 72.0
    },
    {
        "state": "Virginia",
        "county": "Chesapeake city",
        "cases": 10537.0,
        "deaths": 264.0
    },
    {
        "state": "Virginia",
        "county": "Chesterfield",
        "cases": 23363.0,
        "deaths": 697.0
    },
    {
        "state": "Virginia",
        "county": "Clarke",
        "cases": 425.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Colonial Heights city",
        "cases": 1863.0,
        "deaths": 150.0
    },
    {
        "state": "Virginia",
        "county": "Covington city",
        "cases": 17.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Craig",
        "cases": 121.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Culpeper",
        "cases": 6667.0,
        "deaths": 97.0
    },
    {
        "state": "Virginia",
        "county": "Cumberland",
        "cases": 525.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Danville city",
        "cases": 1457.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Dinwiddie",
        "cases": 742.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Emporia city",
        "cases": 1139.0,
        "deaths": 70.0
    },
    {
        "state": "Virginia",
        "county": "Essex",
        "cases": 479.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Fairfax",
        "cases": 161081.0,
        "deaths": 5758.0
    },
    {
        "state": "Virginia",
        "county": "Fairfax city",
        "cases": 1045.0,
        "deaths": 69.0
    },
    {
        "state": "Virginia",
        "county": "Falls Church city",
        "cases": 1000.0,
        "deaths": 89.0
    },
    {
        "state": "Virginia",
        "county": "Fauquier",
        "cases": 4624.0,
        "deaths": 92.0
    },
    {
        "state": "Virginia",
        "county": "Floyd",
        "cases": 88.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Fluvanna",
        "cases": 2805.0,
        "deaths": 162.0
    },
    {
        "state": "Virginia",
        "county": "Franklin",
        "cases": 961.0,
        "deaths": 6.0
    },
    {
        "state": "Virginia",
        "county": "Franklin city",
        "cases": 772.0,
        "deaths": 20.0
    },
    {
        "state": "Virginia",
        "county": "Frederick",
        "cases": 5171.0,
        "deaths": 40.0
    },
    {
        "state": "Virginia",
        "county": "Fredericksburg city",
        "cases": 1659.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Galax city",
        "cases": 926.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Giles",
        "cases": 185.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Gloucester",
        "cases": 1094.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Goochland",
        "cases": 2901.0,
        "deaths": 132.0
    },
    {
        "state": "Virginia",
        "county": "Grayson",
        "cases": 220.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Greene",
        "cases": 468.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Greensville",
        "cases": 1381.0,
        "deaths": 179.0
    },
    {
        "state": "Virginia",
        "county": "Halifax",
        "cases": 688.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Hampton city",
        "cases": 4917.0,
        "deaths": 73.0
    },
    {
        "state": "Virginia",
        "county": "Hanover",
        "cases": 5154.0,
        "deaths": 372.0
    },
    {
        "state": "Virginia",
        "county": "Harrisonburg city",
        "cases": 16257.0,
        "deaths": 451.0
    },
    {
        "state": "Virginia",
        "county": "Henrico",
        "cases": 35500.0,
        "deaths": 3656.0
    },
    {
        "state": "Virginia",
        "county": "Henry",
        "cases": 749.0,
        "deaths": 33.0
    },
    {
        "state": "Virginia",
        "county": "Highland",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Hopewell city",
        "cases": 1206.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Isle of Wight",
        "cases": 3784.0,
        "deaths": 72.0
    },
    {
        "state": "Virginia",
        "county": "James City",
        "cases": 7920.0,
        "deaths": 497.0
    },
    {
        "state": "Virginia",
        "county": "King George",
        "cases": 1293.0,
        "deaths": 114.0
    },
    {
        "state": "Virginia",
        "county": "King William",
        "cases": 293.0,
        "deaths": 13.0
    },
    {
        "state": "Virginia",
        "county": "King and Queen",
        "cases": 147.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Lancaster",
        "cases": 146.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Lee",
        "cases": 378.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Lexington city",
        "cases": 180.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Loudoun",
        "cases": 34215.0,
        "deaths": 771.0
    },
    {
        "state": "Virginia",
        "county": "Louisa",
        "cases": 1906.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Lunenburg",
        "cases": 179.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Lynchburg city",
        "cases": 2297.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Madison",
        "cases": 644.0,
        "deaths": 16.0
    },
    {
        "state": "Virginia",
        "county": "Manassas Park city",
        "cases": 3170.0,
        "deaths": 53.0
    },
    {
        "state": "Virginia",
        "county": "Manassas city",
        "cases": 10240.0,
        "deaths": 69.0
    },
    {
        "state": "Virginia",
        "county": "Mathews",
        "cases": 182.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Mecklenburg",
        "cases": 4113.0,
        "deaths": 292.0
    },
    {
        "state": "Virginia",
        "county": "Middlesex",
        "cases": 254.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Montgomery",
        "cases": 2170.0,
        "deaths": 25.0
    },
    {
        "state": "Virginia",
        "county": "Nelson",
        "cases": 351.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "New Kent",
        "cases": 942.0,
        "deaths": 33.0
    },
    {
        "state": "Virginia",
        "county": "Newport News city",
        "cases": 5644.0,
        "deaths": 278.0
    },
    {
        "state": "Virginia",
        "county": "Norfolk city",
        "cases": 8950.0,
        "deaths": 138.0
    },
    {
        "state": "Virginia",
        "county": "Northampton",
        "cases": 3360.0,
        "deaths": 87.0
    },
    {
        "state": "Virginia",
        "county": "Northumberland",
        "cases": 380.0,
        "deaths": 13.0
    },
    {
        "state": "Virginia",
        "county": "Norton city",
        "cases": 58.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Nottoway",
        "cases": 460.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Orange",
        "cases": 1380.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Page",
        "cases": 3221.0,
        "deaths": 202.0
    },
    {
        "state": "Virginia",
        "county": "Patrick",
        "cases": 101.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Petersburg city",
        "cases": 1476.0,
        "deaths": 58.0
    },
    {
        "state": "Virginia",
        "county": "Pittsylvania",
        "cases": 525.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Poquoson city",
        "cases": 296.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Portsmouth city",
        "cases": 5934.0,
        "deaths": 249.0
    },
    {
        "state": "Virginia",
        "county": "Powhatan",
        "cases": 577.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Prince Edward",
        "cases": 1798.0,
        "deaths": 68.0
    },
    {
        "state": "Virginia",
        "county": "Prince George",
        "cases": 1602.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Prince William",
        "cases": 74025.0,
        "deaths": 1169.0
    },
    {
        "state": "Virginia",
        "county": "Pulaski",
        "cases": 341.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Radford city",
        "cases": 108.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Rappahannock",
        "cases": 196.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Richmond",
        "cases": 4651.0,
        "deaths": 46.0
    },
    {
        "state": "Virginia",
        "county": "Richmond city",
        "cases": 16436.0,
        "deaths": 542.0
    },
    {
        "state": "Virginia",
        "county": "Roanoke",
        "cases": 1975.0,
        "deaths": 14.0
    },
    {
        "state": "Virginia",
        "county": "Roanoke city",
        "cases": 2649.0,
        "deaths": 41.0
    },
    {
        "state": "Virginia",
        "county": "Rockbridge",
        "cases": 303.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Rockingham",
        "cases": 9119.0,
        "deaths": 42.0
    },
    {
        "state": "Virginia",
        "county": "Russell",
        "cases": 163.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Salem city",
        "cases": 736.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Scott",
        "cases": 227.0,
        "deaths": 41.0
    },
    {
        "state": "Virginia",
        "county": "Shenandoah",
        "cases": 5559.0,
        "deaths": 142.0
    },
    {
        "state": "Virginia",
        "county": "Smyth",
        "cases": 540.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Southampton",
        "cases": 3459.0,
        "deaths": 36.0
    },
    {
        "state": "Virginia",
        "county": "Spotsylvania",
        "cases": 6684.0,
        "deaths": 105.0
    },
    {
        "state": "Virginia",
        "county": "Stafford",
        "cases": 10761.0,
        "deaths": 83.0
    },
    {
        "state": "Virginia",
        "county": "Staunton city",
        "cases": 527.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Suffolk city",
        "cases": 6494.0,
        "deaths": 414.0
    },
    {
        "state": "Virginia",
        "county": "Surry",
        "cases": 193.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Sussex",
        "cases": 1309.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "Tazewell",
        "cases": 237.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Unknown",
        "cases": 114.0,
        "deaths": 905.0
    },
    {
        "state": "Virginia",
        "county": "Virginia Beach city",
        "cases": 17287.0,
        "deaths": 478.0
    },
    {
        "state": "Virginia",
        "county": "Warren",
        "cases": 2208.0,
        "deaths": 17.0
    },
    {
        "state": "Virginia",
        "county": "Washington",
        "cases": 1525.0,
        "deaths": 88.0
    },
    {
        "state": "Virginia",
        "county": "Waynesboro city",
        "cases": 561.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Westmoreland",
        "cases": 970.0,
        "deaths": 0.0
    },
    {
        "state": "Virginia",
        "county": "Williamsburg city",
        "cases": 1192.0,
        "deaths": 86.0
    },
    {
        "state": "Virginia",
        "county": "Winchester city",
        "cases": 1915.0,
        "deaths": 8.0
    },
    {
        "state": "Virginia",
        "county": "Wise",
        "cases": 799.0,
        "deaths": 46.0
    },
    {
        "state": "Virginia",
        "county": "Wythe",
        "cases": 481.0,
        "deaths": 29.0
    },
    {
        "state": "Virginia",
        "county": "York",
        "cases": 2153.0,
        "deaths": 60.0
    },
    {
        "state": "Washington",
        "county": "Adams",
        "cases": 2070.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Asotin",
        "cases": 619.0,
        "deaths": 52.0
    },
    {
        "state": "Washington",
        "county": "Benton",
        "cases": 21666.0,
        "deaths": 1878.0
    },
    {
        "state": "Washington",
        "county": "Chelan",
        "cases": 4897.0,
        "deaths": 300.0
    },
    {
        "state": "Washington",
        "county": "Clallam",
        "cases": 797.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Clark",
        "cases": 15431.0,
        "deaths": 948.0
    },
    {
        "state": "Washington",
        "county": "Columbia",
        "cases": 69.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Cowlitz",
        "cases": 2114.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Douglas",
        "cases": 3180.0,
        "deaths": 58.0
    },
    {
        "state": "Washington",
        "county": "Ferry",
        "cases": 56.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Franklin",
        "cases": 14080.0,
        "deaths": 383.0
    },
    {
        "state": "Washington",
        "county": "Grant",
        "cases": 8062.0,
        "deaths": 89.0
    },
    {
        "state": "Washington",
        "county": "Grays Harbor",
        "cases": 557.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Island",
        "cases": 8829.0,
        "deaths": 410.0
    },
    {
        "state": "Washington",
        "county": "Jefferson",
        "cases": 1485.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "King",
        "cases": 299845.0,
        "deaths": 20743.0
    },
    {
        "state": "Washington",
        "county": "Kitsap",
        "cases": 7272.0,
        "deaths": 79.0
    },
    {
        "state": "Washington",
        "county": "Kittitas",
        "cases": 1103.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Klickitat",
        "cases": 868.0,
        "deaths": 121.0
    },
    {
        "state": "Washington",
        "county": "Lewis",
        "cases": 1267.0,
        "deaths": 115.0
    },
    {
        "state": "Washington",
        "county": "Lincoln",
        "cases": 105.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Mason",
        "cases": 1135.0,
        "deaths": 24.0
    },
    {
        "state": "Washington",
        "county": "Okanogan",
        "cases": 1010.0,
        "deaths": 42.0
    },
    {
        "state": "Washington",
        "county": "Pacific",
        "cases": 187.0,
        "deaths": 8.0
    },
    {
        "state": "Washington",
        "county": "Pend Oreille",
        "cases": 81.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Pierce",
        "cases": 65140.0,
        "deaths": 2033.0
    },
    {
        "state": "Washington",
        "county": "San Juan",
        "cases": 674.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Skagit",
        "cases": 15096.0,
        "deaths": 491.0
    },
    {
        "state": "Washington",
        "county": "Skamania",
        "cases": 137.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Snohomish",
        "cases": 125150.0,
        "deaths": 4834.0
    },
    {
        "state": "Washington",
        "county": "Spokane",
        "cases": 16847.0,
        "deaths": 986.0
    },
    {
        "state": "Washington",
        "county": "Stevens",
        "cases": 412.0,
        "deaths": 37.0
    },
    {
        "state": "Washington",
        "county": "Thurston",
        "cases": 5130.0,
        "deaths": 46.0
    },
    {
        "state": "Washington",
        "county": "Unknown",
        "cases": 5671.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Wahkiakum",
        "cases": 112.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Walla Walla",
        "cases": 2899.0,
        "deaths": 22.0
    },
    {
        "state": "Washington",
        "county": "Whatcom",
        "cases": 14900.0,
        "deaths": 1336.0
    },
    {
        "state": "Washington",
        "county": "Whitman",
        "cases": 767.0,
        "deaths": 0.0
    },
    {
        "state": "Washington",
        "county": "Yakima",
        "cases": 57391.0,
        "deaths": 2053.0
    },
    {
        "state": "West Virginia",
        "county": "Barbour",
        "cases": 242.0,
        "deaths": 27.0
    },
    {
        "state": "West Virginia",
        "county": "Berkeley",
        "cases": 6496.0,
        "deaths": 98.0
    },
    {
        "state": "West Virginia",
        "county": "Boone",
        "cases": 188.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Braxton",
        "cases": 67.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Brooke",
        "cases": 124.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Cabell",
        "cases": 1710.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Calhoun",
        "cases": 27.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Clay",
        "cases": 26.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Fayette",
        "cases": 688.0,
        "deaths": 10.0
    },
    {
        "state": "West Virginia",
        "county": "Gilmer",
        "cases": 122.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Grant",
        "cases": 91.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Greenbrier",
        "cases": 244.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Hampshire",
        "cases": 311.0,
        "deaths": 31.0
    },
    {
        "state": "West Virginia",
        "county": "Hancock",
        "cases": 442.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Hardy",
        "cases": 409.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Harrison",
        "cases": 1490.0,
        "deaths": 44.0
    },
    {
        "state": "West Virginia",
        "county": "Jackson",
        "cases": 4464.0,
        "deaths": 422.0
    },
    {
        "state": "West Virginia",
        "county": "Jefferson",
        "cases": 3273.0,
        "deaths": 22.0
    },
    {
        "state": "West Virginia",
        "county": "Kanawha",
        "cases": 6683.0,
        "deaths": 266.0
    },
    {
        "state": "West Virginia",
        "county": "Lewis",
        "cases": 137.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Lincoln",
        "cases": 93.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Logan",
        "cases": 519.0,
        "deaths": 38.0
    },
    {
        "state": "West Virginia",
        "county": "Marion",
        "cases": 1932.0,
        "deaths": 88.0
    },
    {
        "state": "West Virginia",
        "county": "Marshall",
        "cases": 642.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Mason",
        "cases": 526.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "McDowell",
        "cases": 245.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Mercer",
        "cases": 456.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Mineral",
        "cases": 644.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Mingo",
        "cases": 83.0,
        "deaths": 35.0
    },
    {
        "state": "West Virginia",
        "county": "Monongalia",
        "cases": 4670.0,
        "deaths": 184.0
    },
    {
        "state": "West Virginia",
        "county": "Monroe",
        "cases": 183.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Morgan",
        "cases": 483.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Nicholas",
        "cases": 242.0,
        "deaths": 9.0
    },
    {
        "state": "West Virginia",
        "county": "Ohio",
        "cases": 1348.0,
        "deaths": 37.0
    },
    {
        "state": "West Virginia",
        "county": "Pendleton",
        "cases": 136.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Pleasants",
        "cases": 84.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Pocahontas",
        "cases": 66.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Preston",
        "cases": 524.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Putnam",
        "cases": 956.0,
        "deaths": 1.0
    },
    {
        "state": "West Virginia",
        "county": "Raleigh",
        "cases": 389.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Randolph",
        "cases": 206.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Ritchie",
        "cases": 17.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Roane",
        "cases": 238.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Summers",
        "cases": 39.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Taylor",
        "cases": 260.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Tucker",
        "cases": 211.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Tyler",
        "cases": 123.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Upshur",
        "cases": 193.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Wayne",
        "cases": 3164.0,
        "deaths": 218.0
    },
    {
        "state": "West Virginia",
        "county": "Wetzel",
        "cases": 182.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Wirt",
        "cases": 119.0,
        "deaths": 0.0
    },
    {
        "state": "West Virginia",
        "county": "Wood",
        "cases": 1548.0,
        "deaths": 63.0
    },
    {
        "state": "West Virginia",
        "county": "Wyoming",
        "cases": 50.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Adams",
        "cases": 162.0,
        "deaths": 36.0
    },
    {
        "state": "Wisconsin",
        "county": "Ashland",
        "cases": 88.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Barron",
        "cases": 333.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Bayfield",
        "cases": 165.0,
        "deaths": 32.0
    },
    {
        "state": "Wisconsin",
        "county": "Brown",
        "cases": 42857.0,
        "deaths": 332.0
    },
    {
        "state": "Wisconsin",
        "county": "Buffalo",
        "cases": 191.0,
        "deaths": 45.0
    },
    {
        "state": "Wisconsin",
        "county": "Burnett",
        "cases": 7.0,
        "deaths": 6.0
    },
    {
        "state": "Wisconsin",
        "county": "Calumet",
        "cases": 877.0,
        "deaths": 10.0
    },
    {
        "state": "Wisconsin",
        "county": "Chippewa",
        "cases": 1171.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Clark",
        "cases": 829.0,
        "deaths": 98.0
    },
    {
        "state": "Wisconsin",
        "county": "Columbia",
        "cases": 1431.0,
        "deaths": 44.0
    },
    {
        "state": "Wisconsin",
        "county": "Crawford",
        "cases": 354.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Dane",
        "cases": 20780.0,
        "deaths": 886.0
    },
    {
        "state": "Wisconsin",
        "county": "Dodge",
        "cases": 1911.0,
        "deaths": 36.0
    },
    {
        "state": "Wisconsin",
        "county": "Door",
        "cases": 659.0,
        "deaths": 75.0
    },
    {
        "state": "Wisconsin",
        "county": "Douglas",
        "cases": 481.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Dunn",
        "cases": 546.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Eau Claire",
        "cases": 1734.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Florence",
        "cases": 89.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Fond du Lac",
        "cases": 3862.0,
        "deaths": 148.0
    },
    {
        "state": "Wisconsin",
        "county": "Forest",
        "cases": 64.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Grant",
        "cases": 1646.0,
        "deaths": 208.0
    },
    {
        "state": "Wisconsin",
        "county": "Green",
        "cases": 872.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Green Lake",
        "cases": 161.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Iowa",
        "cases": 359.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Iron",
        "cases": 93.0,
        "deaths": 54.0
    },
    {
        "state": "Wisconsin",
        "county": "Jackson",
        "cases": 528.0,
        "deaths": 37.0
    },
    {
        "state": "Wisconsin",
        "county": "Jefferson",
        "cases": 1851.0,
        "deaths": 22.0
    },
    {
        "state": "Wisconsin",
        "county": "Juneau",
        "cases": 644.0,
        "deaths": 38.0
    },
    {
        "state": "Wisconsin",
        "county": "Kenosha",
        "cases": 19447.0,
        "deaths": 421.0
    },
    {
        "state": "Wisconsin",
        "county": "Kewaunee",
        "cases": 654.0,
        "deaths": 36.0
    },
    {
        "state": "Wisconsin",
        "county": "La Crosse",
        "cases": 1524.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Lafayette",
        "cases": 292.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Lincoln",
        "cases": 29.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Manitowoc",
        "cases": 505.0,
        "deaths": 24.0
    },
    {
        "state": "Wisconsin",
        "county": "Marathon",
        "cases": 919.0,
        "deaths": 39.0
    },
    {
        "state": "Wisconsin",
        "county": "Marinette",
        "cases": 469.0,
        "deaths": 41.0
    },
    {
        "state": "Wisconsin",
        "county": "Marquette",
        "cases": 137.0,
        "deaths": 32.0
    },
    {
        "state": "Wisconsin",
        "county": "Menominee",
        "cases": 62.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Milwaukee",
        "cases": 137487.0,
        "deaths": 7451.0
    },
    {
        "state": "Wisconsin",
        "county": "Monroe",
        "cases": 577.0,
        "deaths": 22.0
    },
    {
        "state": "Wisconsin",
        "county": "Oconto",
        "cases": 599.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Oneida",
        "cases": 291.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Outagamie",
        "cases": 3046.0,
        "deaths": 103.0
    },
    {
        "state": "Wisconsin",
        "county": "Ozaukee",
        "cases": 4473.0,
        "deaths": 465.0
    },
    {
        "state": "Wisconsin",
        "county": "Pepin",
        "cases": 6.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Pierce",
        "cases": 540.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Polk",
        "cases": 170.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Portage",
        "cases": 248.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Price",
        "cases": 39.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Racine",
        "cases": 18283.0,
        "deaths": 489.0
    },
    {
        "state": "Wisconsin",
        "county": "Richland",
        "cases": 457.0,
        "deaths": 60.0
    },
    {
        "state": "Wisconsin",
        "county": "Rock",
        "cases": 9092.0,
        "deaths": 320.0
    },
    {
        "state": "Wisconsin",
        "county": "Rusk",
        "cases": 169.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Sauk",
        "cases": 2313.0,
        "deaths": 141.0
    },
    {
        "state": "Wisconsin",
        "county": "Sawyer",
        "cases": 117.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Shawano",
        "cases": 593.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Sheboygan",
        "cases": 2362.0,
        "deaths": 99.0
    },
    {
        "state": "Wisconsin",
        "county": "St. Croix",
        "cases": 908.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Trempealeau",
        "cases": 149.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Vernon",
        "cases": 99.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Vilas",
        "cases": 205.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Walworth",
        "cases": 6614.0,
        "deaths": 290.0
    },
    {
        "state": "Wisconsin",
        "county": "Washburn",
        "cases": 36.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Washington",
        "cases": 4812.0,
        "deaths": 172.0
    },
    {
        "state": "Wisconsin",
        "county": "Waukesha",
        "cases": 15410.0,
        "deaths": 698.0
    },
    {
        "state": "Wisconsin",
        "county": "Waupaca",
        "cases": 380.0,
        "deaths": 53.0
    },
    {
        "state": "Wisconsin",
        "county": "Waushara",
        "cases": 124.0,
        "deaths": 0.0
    },
    {
        "state": "Wisconsin",
        "county": "Winnebago",
        "cases": 2924.0,
        "deaths": 44.0
    },
    {
        "state": "Wisconsin",
        "county": "Wood",
        "cases": 151.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Albany",
        "cases": 330.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Big Horn",
        "cases": 98.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Campbell",
        "cases": 981.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Carbon",
        "cases": 285.0,
        "deaths": 2.0
    },
    {
        "state": "Wyoming",
        "county": "Converse",
        "cases": 801.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Crook",
        "cases": 194.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Fremont",
        "cases": 5364.0,
        "deaths": 119.0
    },
    {
        "state": "Wyoming",
        "county": "Goshen",
        "cases": 197.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Hot Springs",
        "cases": 170.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Johnson",
        "cases": 686.0,
        "deaths": 37.0
    },
    {
        "state": "Wyoming",
        "county": "Laramie",
        "cases": 5973.0,
        "deaths": 37.0
    },
    {
        "state": "Wyoming",
        "county": "Lincoln",
        "cases": 426.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Natrona",
        "cases": 2193.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Niobrara",
        "cases": 80.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Park",
        "cases": 64.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Sheridan",
        "cases": 823.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Sublette",
        "cases": 134.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Sweetwater",
        "cases": 742.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Teton",
        "cases": 4175.0,
        "deaths": 27.0
    },
    {
        "state": "Wyoming",
        "county": "Uinta",
        "cases": 311.0,
        "deaths": 0.0
    },
    {
        "state": "Wyoming",
        "county": "Washakie",
        "cases": 341.0,
        "deaths": 0.0
    }
]

Mock.mock(
    "/api/countyCasesDeaths",
    "post",
    function (options) {
        let state = options.body
        let countyCasesDeaths = [];
        //从usCounty中筛选出state为传入参数state的数据
        for (let i = 0; i < usCounty.length; i++) {
            if (usCounty[i].state === state) {
                countyCasesDeaths.push(usCounty[i]);
            }
        }
        return {
            "status": 200,
            "message": "success",
            "data": countyCasesDeaths
        }
    }
)

//确诊前10
Mock.mock(
    "/api/top10Cases",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "New York",
                "cases": 13231107,
                "deaths": 937038
            },
            {
                "state": "New Jersey",
                "cases": 4883171,
                "deaths": 278144
            },
            {
                "state": "Massachusetts",
                "cases": 2475673,
                "deaths": 136594
            },
            {
                "state": "Illinois",
                "cases": 2316059,
                "deaths": 98378
            },
            {
                "state": "California",
                "cases": 2211456,
                "deaths": 84009
            },
            {
                "state": "Pennsylvania",
                "cases": 1970295,
                "deaths": 102387
            },
            {
                "state": "Michigan",
                "cases": 1753801,
                "deaths": 146085
            },
            {
                "state": "Florida",
                "cases": 1480283,
                "deaths": 52255
            },
            {
                "state": "Texas",
                "cases": 1282385,
                "deaths": 33806
            },
            {
                "state": "Louisiana",
                "cases": 1258141,
                "deaths": 75647
            }
        ]
    }
)

//病死率前10
Mock.mock(
    "/api/top10Deaths",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "New York",
                "cases": 13231107,
                "deaths": 937038
            },
            {
                "state": "New Jersey",
                "cases": 4883171,
                "deaths": 278144
            },
            {
                "state": "Michigan",
                "cases": 1753801,
                "deaths": 146085
            },
            {
                "state": "Massachusetts",
                "cases": 2475673,
                "deaths": 136594
            },
            {
                "state": "Pennsylvania",
                "cases": 1970295,
                "deaths": 102387
            },
            {
                "state": "Illinois",
                "cases": 2316059,
                "deaths": 98378
            },
            {
                "state": "Connecticut",
                "cases": 1116652,
                "deaths": 86078
            },
            {
                "state": "California",
                "cases": 2211456,
                "deaths": 84009
            },
            {
                "state": "Louisiana",
                "cases": 1258141,
                "deaths": 75647
            },
            {
                "state": "Florida",
                "cases": 1480283,
                "deaths": 52255
            }
        ]
    }
)

//病死率前10
Mock.mock(
    "/api/top10DeathRate",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "Northern Mariana Islands",
                "cases": "689.0",
                "deaths": "92.0",
                "rate": "13.35"
            },
            {
                "state": "Michigan",
                "cases": "1753801.0",
                "deaths": "146085.0",
                "rate": "8.33"
            },
            {
                "state": "Connecticut",
                "cases": "1116652.0",
                "deaths": "86078.0",
                "rate": "7.71"
            },
            {
                "state": "New York",
                "cases": "1.3231107E7",
                "deaths": "937038.0",
                "rate": "7.08"
            },
            {
                "state": "Louisiana",
                "cases": "1258141.0",
                "deaths": "75647.0",
                "rate": "6.01"
            },
            {
                "state": "New Jersey",
                "cases": "4883171.0",
                "deaths": "278144.0",
                "rate": "5.7"
            },
            {
                "state": "Indiana",
                "cases": "764794.0",
                "deaths": "43385.0",
                "rate": "5.67"
            },
            {
                "state": "Oklahoma",
                "cases": "158406.0",
                "deaths": "8861.0",
                "rate": "5.59"
            },
            {
                "state": "Massachusetts",
                "cases": "2475673.0",
                "deaths": "136594.0",
                "rate": "5.52"
            },
            {
                "state": "Washington",
                "cases": "707111.0",
                "deaths": "37088.0",
                "rate": "5.25"
            }
        ]
    }
)

//病死率
Mock.mock(
    "/api/deathRate",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "Alabama",
                "cases": "319025.0",
                "deaths": "11654.0",
                "rate": "3.65"
            },
            {
                "state": "Alaska",
                "cases": "16291.0",
                "deaths": "328.0",
                "rate": "2.01"
            },
            {
                "state": "Arizona",
                "cases": "348419.0",
                "deaths": "14918.0",
                "rate": "4.28"
            },
            {
                "state": "Arkansas",
                "cases": "134312.0",
                "deaths": "2759.0",
                "rate": "2.05"
            },
            {
                "state": "California",
                "cases": "2211456.0",
                "deaths": "84009.0",
                "rate": "3.8"
            },
            {
                "state": "Colorado",
                "cases": "649106.0",
                "deaths": "31234.0",
                "rate": "4.81"
            },
            {
                "state": "Connecticut",
                "cases": "1116652.0",
                "deaths": "86078.0",
                "rate": "7.71"
            },
            {
                "state": "Delaware",
                "cases": "191719.0",
                "deaths": "6214.0",
                "rate": "3.24"
            },
            {
                "state": "District of Columbia",
                "cases": "190158.0",
                "deaths": "8726.0",
                "rate": "4.59"
            },
            {
                "state": "Florida",
                "cases": "1480283.0",
                "deaths": "52255.0",
                "rate": "3.53"
            },
            {
                "state": "Georgia",
                "cases": "1084055.0",
                "deaths": "45422.0",
                "rate": "4.19"
            },
            {
                "state": "Guam",
                "cases": "42669.0",
                "deaths": "281.0",
                "rate": "0.66"
            },
            {
                "state": "Hawaii",
                "cases": "28266.0",
                "deaths": "595.0",
                "rate": "2.11"
            },
            {
                "state": "Idaho",
                "cases": "89993.0",
                "deaths": "2437.0",
                "rate": "2.71"
            },
            {
                "state": "Illinois",
                "cases": "2316059.0",
                "deaths": "98378.0",
                "rate": "4.25"
            },
            {
                "state": "Indiana",
                "cases": "764794.0",
                "deaths": "43385.0",
                "rate": "5.67"
            },
            {
                "state": "Iowa",
                "cases": "314108.0",
                "deaths": "7066.0",
                "rate": "2.25"
            },
            {
                "state": "Kansas",
                "cases": "187170.0",
                "deaths": "5529.0",
                "rate": "2.95"
            },
            {
                "state": "Kentucky",
                "cases": "203552.0",
                "deaths": "9886.0",
                "rate": "4.86"
            },
            {
                "state": "Louisiana",
                "cases": "1258141.0",
                "deaths": "75647.0",
                "rate": "6.01"
            },
            {
                "state": "Maine",
                "cases": "51587.0",
                "deaths": "2076.0",
                "rate": "4.02"
            },
            {
                "state": "Maryland",
                "cases": "950641.0",
                "deaths": "45068.0",
                "rate": "4.74"
            },
            {
                "state": "Massachusetts",
                "cases": "2475673.0",
                "deaths": "136594.0",
                "rate": "5.52"
            },
            {
                "state": "Michigan",
                "cases": "1753801.0",
                "deaths": "146085.0",
                "rate": "8.33"
            },
            {
                "state": "Minnesota",
                "cases": "282491.0",
                "deaths": "14724.0",
                "rate": "5.21"
            },
            {
                "state": "Mississippi",
                "cases": "295400.0",
                "deaths": "12060.0",
                "rate": "4.08"
            },
            {
                "state": "Missouri",
                "cases": "336833.0",
                "deaths": "14588.0",
                "rate": "4.33"
            },
            {
                "state": "Montana",
                "cases": "21483.0",
                "deaths": "594.0",
                "rate": "2.76"
            },
            {
                "state": "Nebraska",
                "cases": "201088.0",
                "deaths": "2794.0",
                "rate": "1.39"
            },
            {
                "state": "Nevada",
                "cases": "222290.0",
                "deaths": "10034.0",
                "rate": "4.51"
            },
            {
                "state": "New Hampshire",
                "cases": "97186.0",
                "deaths": "3497.0",
                "rate": "3.6"
            },
            {
                "state": "New Jersey",
                "cases": "4883171.0",
                "deaths": "278144.0",
                "rate": "5.7"
            },
            {
                "state": "New Mexico",
                "cases": "144662.0",
                "deaths": "5363.0",
                "rate": "3.71"
            },
            {
                "state": "New York",
                "cases": "1.3231107E7",
                "deaths": "937038.0",
                "rate": "7.08"
            },
            {
                "state": "North Carolina",
                "cases": "459988.0",
                "deaths": "15526.0",
                "rate": "3.38"
            },
            {
                "state": "North Dakota",
                "cases": "44513.0",
                "deaths": "962.0",
                "rate": "2.16"
            },
            {
                "state": "Northern Mariana Islands",
                "cases": "689.0",
                "deaths": "92.0",
                "rate": "13.35"
            },
            {
                "state": "Ohio",
                "cases": "755119.0",
                "deaths": "38465.0",
                "rate": "5.09"
            },
            {
                "state": "Oklahoma",
                "cases": "158406.0",
                "deaths": "8861.0",
                "rate": "5.59"
            },
            {
                "state": "Oregon",
                "cases": "115862.0",
                "deaths": "4336.0",
                "rate": "3.74"
            },
            {
                "state": "Pennsylvania",
                "cases": "1970295.0",
                "deaths": "102387.0",
                "rate": "5.2"
            },
            {
                "state": "Puerto Rico",
                "cases": "71061.0",
                "deaths": "3568.0",
                "rate": "5.02"
            },
            {
                "state": "Rhode Island",
                "cases": "332313.0",
                "deaths": "11387.0",
                "rate": "3.43"
            },
            {
                "state": "South Carolina",
                "cases": "264996.0",
                "deaths": "9759.0",
                "rate": "3.68"
            },
            {
                "state": "South Dakota",
                "cases": "100555.0",
                "deaths": "877.0",
                "rate": "0.87"
            },
            {
                "state": "Tennessee",
                "cases": "486777.0",
                "deaths": "8620.0",
                "rate": "1.77"
            },
            {
                "state": "Texas",
                "cases": "1282385.0",
                "deaths": "33806.0",
                "rate": "2.64"
            },
            {
                "state": "USA",
                "cases": "4.5979388E7",
                "deaths": "2513314.0",
                "rate": "5.47"
            },
            {
                "state": "Utah",
                "cases": "205581.0",
                "deaths": "1998.0",
                "rate": "0.97"
            },
            {
                "state": "Vermont",
                "cases": "40628.0",
                "deaths": "2049.0",
                "rate": "5.04"
            },
            {
                "state": "Virgin Islands",
                "cases": "3028.0",
                "deaths": "150.0",
                "rate": "4.95"
            },
            {
                "state": "Virginia",
                "cases": "692810.0",
                "deaths": "23001.0",
                "rate": "3.32"
            },
            {
                "state": "Washington",
                "cases": "707111.0",
                "deaths": "37088.0",
                "rate": "5.25"
            },
            {
                "state": "West Virginia",
                "cases": "47805.0",
                "deaths": "1593.0",
                "rate": "3.33"
            },
            {
                "state": "Wisconsin",
                "cases": "321457.0",
                "deaths": "13107.0",
                "rate": "4.08"
            },
            {
                "state": "Wyoming",
                "cases": "24368.0",
                "deaths": "222.0",
                "rate": "0.91"
            }
        ]
    }
)

//每天确诊/死亡
Mock.mock(
    "/api/dayCasesDeaths",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "date": "2020-01-21",
                "cases": "1.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-22",
                "cases": "1.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-23",
                "cases": "1.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-24",
                "cases": "2.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-25",
                "cases": "3.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-26",
                "cases": "5.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-27",
                "cases": "5.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-28",
                "cases": "5.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-29",
                "cases": "5.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-30",
                "cases": "6.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-01-31",
                "cases": "7.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-01",
                "cases": "8.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-02",
                "cases": "11.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-03",
                "cases": "11.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-04",
                "cases": "11.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-05",
                "cases": "12.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-06",
                "cases": "12.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-07",
                "cases": "12.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-08",
                "cases": "12.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-09",
                "cases": "12.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-10",
                "cases": "13.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-11",
                "cases": "13.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-12",
                "cases": "14.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-13",
                "cases": "15.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-14",
                "cases": "15.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-15",
                "cases": "15.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-16",
                "cases": "15.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-17",
                "cases": "25.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-18",
                "cases": "25.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-19",
                "cases": "25.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-20",
                "cases": "27.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-21",
                "cases": "30.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-22",
                "cases": "30.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-23",
                "cases": "30.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-24",
                "cases": "43.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-25",
                "cases": "45.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-26",
                "cases": "60.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-27",
                "cases": "60.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-28",
                "cases": "65.0",
                "deaths": "0.0"
            },
            {
                "date": "2020-02-29",
                "cases": "70.0",
                "deaths": "1.0"
            },
            {
                "date": "2020-03-01",
                "cases": "88.0",
                "deaths": "3.0"
            },
            {
                "date": "2020-03-02",
                "cases": "104.0",
                "deaths": "6.0"
            },
            {
                "date": "2020-03-03",
                "cases": "125.0",
                "deaths": "10.0"
            },
            {
                "date": "2020-03-04",
                "cases": "161.0",
                "deaths": "12.0"
            },
            {
                "date": "2020-03-05",
                "cases": "228.0",
                "deaths": "12.0"
            },
            {
                "date": "2020-03-06",
                "cases": "311.0",
                "deaths": "15.0"
            },
            {
                "date": "2020-03-07",
                "cases": "428.0",
                "deaths": "19.0"
            },
            {
                "date": "2020-03-08",
                "cases": "547.0",
                "deaths": "22.0"
            },
            {
                "date": "2020-03-09",
                "cases": "748.0",
                "deaths": "26.0"
            },
            {
                "date": "2020-03-10",
                "cases": "1018.0",
                "deaths": "31.0"
            },
            {
                "date": "2020-03-11",
                "cases": "1263.0",
                "deaths": "37.0"
            },
            {
                "date": "2020-03-12",
                "cases": "1668.0",
                "deaths": "43.0"
            },
            {
                "date": "2020-03-13",
                "cases": "2224.0",
                "deaths": "50.0"
            },
            {
                "date": "2020-03-14",
                "cases": "2898.0",
                "deaths": "60.0"
            },
            {
                "date": "2020-03-15",
                "cases": "3600.0",
                "deaths": "68.0"
            },
            {
                "date": "2020-03-16",
                "cases": "4507.0",
                "deaths": "91.0"
            },
            {
                "date": "2020-03-17",
                "cases": "5906.0",
                "deaths": "117.0"
            },
            {
                "date": "2020-03-18",
                "cases": "8350.0",
                "deaths": "162.0"
            },
            {
                "date": "2020-03-19",
                "cases": "12393.0",
                "deaths": "212.0"
            },
            {
                "date": "2020-03-20",
                "cases": "18010.0",
                "deaths": "275.0"
            },
            {
                "date": "2020-03-21",
                "cases": "24526.0",
                "deaths": "358.0"
            },
            {
                "date": "2020-03-22",
                "cases": "33070.0",
                "deaths": "455.0"
            },
            {
                "date": "2020-03-23",
                "cases": "43499.0",
                "deaths": "574.0"
            },
            {
                "date": "2020-03-24",
                "cases": "54171.0",
                "deaths": "784.0"
            },
            {
                "date": "2020-03-25",
                "cases": "68780.0",
                "deaths": "1049.0"
            },
            {
                "date": "2020-03-26",
                "cases": "85639.0",
                "deaths": "1349.0"
            },
            {
                "date": "2020-03-27",
                "cases": "103005.0",
                "deaths": "1761.0"
            },
            {
                "date": "2020-03-28",
                "cases": "123944.0",
                "deaths": "2291.0"
            },
            {
                "date": "2020-03-29",
                "cases": "142386.0",
                "deaths": "2628.0"
            },
            {
                "date": "2020-03-30",
                "cases": "163876.0",
                "deaths": "3191.0"
            },
            {
                "date": "2020-03-31",
                "cases": "188325.0",
                "deaths": "4010.0"
            },
            {
                "date": "2020-04-01",
                "cases": "215463.0",
                "deaths": "5025.0"
            },
            {
                "date": "2020-04-02",
                "cases": "244592.0",
                "deaths": "6092.0"
            },
            {
                "date": "2020-04-03",
                "cases": "276962.0",
                "deaths": "7917.0"
            },
            {
                "date": "2020-04-04",
                "cases": "311801.0",
                "deaths": "9470.0"
            },
            {
                "date": "2020-04-05",
                "cases": "337591.0",
                "deaths": "10832.0"
            },
            {
                "date": "2020-04-06",
                "cases": "371110.0",
                "deaths": "13080.0"
            },
            {
                "date": "2020-04-07",
                "cases": "399350.0",
                "deaths": "14582.0"
            },
            {
                "date": "2020-04-08",
                "cases": "431133.0",
                "deaths": "16653.0"
            },
            {
                "date": "2020-04-09",
                "cases": "465846.0",
                "deaths": "18779.0"
            },
            {
                "date": "2020-04-10",
                "cases": "499303.0",
                "deaths": "21032.0"
            },
            {
                "date": "2020-04-11",
                "cases": "531028.0",
                "deaths": "23109.0"
            },
            {
                "date": "2020-04-12",
                "cases": "558153.0",
                "deaths": "24787.0"
            },
            {
                "date": "2020-04-13",
                "cases": "583940.0",
                "deaths": "26549.0"
            },
            {
                "date": "2020-04-14",
                "cases": "610546.0",
                "deaths": "29247.0"
            },
            {
                "date": "2020-04-15",
                "cases": "640380.0",
                "deaths": "31995.0"
            },
            {
                "date": "2020-04-16",
                "cases": "672244.0",
                "deaths": "34352.0"
            },
            {
                "date": "2020-04-17",
                "cases": "703661.0",
                "deaths": "36618.0"
            },
            {
                "date": "2020-04-18",
                "cases": "732036.0",
                "deaths": "38571.0"
            },
            {
                "date": "2020-04-19",
                "cases": "757390.0",
                "deaths": "40089.0"
            },
            {
                "date": "2020-04-20",
                "cases": "784658.0",
                "deaths": "41919.0"
            },
            {
                "date": "2020-04-21",
                "cases": "810146.0",
                "deaths": "44587.0"
            },
            {
                "date": "2020-04-22",
                "cases": "837999.0",
                "deaths": "46896.0"
            },
            {
                "date": "2020-04-23",
                "cases": "871888.0",
                "deaths": "49066.0"
            },
            {
                "date": "2020-04-24",
                "cases": "909473.0",
                "deaths": "51157.0"
            },
            {
                "date": "2020-04-25",
                "cases": "943755.0",
                "deaths": "53160.0"
            },
            {
                "date": "2020-04-26",
                "cases": "970353.0",
                "deaths": "54406.0"
            },
            {
                "date": "2020-04-27",
                "cases": "993710.0",
                "deaths": "55996.0"
            },
            {
                "date": "2020-04-28",
                "cases": "1018551.0",
                "deaths": "58374.0"
            },
            {
                "date": "2020-04-29",
                "cases": "1045061.0",
                "deaths": "60888.0"
            },
            {
                "date": "2020-04-30",
                "cases": "1075486.0",
                "deaths": "63099.0"
            },
            {
                "date": "2020-05-01",
                "cases": "1109434.0",
                "deaths": "64859.0"
            },
            {
                "date": "2020-05-02",
                "cases": "1138961.0",
                "deaths": "66444.0"
            },
            {
                "date": "2020-05-03",
                "cases": "1164994.0",
                "deaths": "67772.0"
            },
            {
                "date": "2020-05-04",
                "cases": "1186913.0",
                "deaths": "68832.0"
            },
            {
                "date": "2020-05-05",
                "cases": "1210627.0",
                "deaths": "71066.0"
            },
            {
                "date": "2020-05-06",
                "cases": "1235132.0",
                "deaths": "74010.0"
            },
            {
                "date": "2020-05-07",
                "cases": "1263875.0",
                "deaths": "75733.0"
            },
            {
                "date": "2020-05-08",
                "cases": "1291529.0",
                "deaths": "77306.0"
            },
            {
                "date": "2020-05-09",
                "cases": "1316439.0",
                "deaths": "78761.0"
            },
            {
                "date": "2020-05-10",
                "cases": "1336598.0",
                "deaths": "79692.0"
            },
            {
                "date": "2020-05-11",
                "cases": "1354356.0",
                "deaths": "80681.0"
            },
            {
                "date": "2020-05-12",
                "cases": "1376649.0",
                "deaths": "82336.0"
            },
            {
                "date": "2020-05-13",
                "cases": "1397833.0",
                "deaths": "84104.0"
            },
            {
                "date": "2020-05-14",
                "cases": "1424847.0",
                "deaths": "85842.0"
            },
            {
                "date": "2020-05-15",
                "cases": "1450964.0",
                "deaths": "87434.0"
            },
            {
                "date": "2020-05-16",
                "cases": "1474612.0",
                "deaths": "88660.0"
            },
            {
                "date": "2020-05-17",
                "cases": "1493597.0",
                "deaths": "89504.0"
            },
            {
                "date": "2020-05-18",
                "cases": "1515373.0",
                "deaths": "90293.0"
            },
            {
                "date": "2020-05-19",
                "cases": "1536471.0",
                "deaths": "91936.0"
            }
        ]
    }
)

//每天新增确认/死亡
Mock.mock(
    "/api/dayAddCasesDeaths",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "date": "2020-01-21",
                "cases": 1,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-22",
                "cases": 1,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-23",
                "cases": 1,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-24",
                "cases": 2,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-25",
                "cases": 3,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-26",
                "cases": 5,
                "deaths": 0,
                "casesVariation": 2,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-27",
                "cases": 5,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-28",
                "cases": 5,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-29",
                "cases": 5,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-30",
                "cases": 6,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-01-31",
                "cases": 7,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-01",
                "cases": 8,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-02",
                "cases": 11,
                "deaths": 0,
                "casesVariation": 3,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-03",
                "cases": 11,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-04",
                "cases": 11,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-05",
                "cases": 12,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-06",
                "cases": 12,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-07",
                "cases": 12,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-08",
                "cases": 12,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-09",
                "cases": 12,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-10",
                "cases": 13,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-11",
                "cases": 13,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-12",
                "cases": 14,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-13",
                "cases": 15,
                "deaths": 0,
                "casesVariation": 1,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-14",
                "cases": 15,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-15",
                "cases": 15,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-16",
                "cases": 15,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-17",
                "cases": 25,
                "deaths": 0,
                "casesVariation": 10,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-18",
                "cases": 25,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-19",
                "cases": 25,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-20",
                "cases": 27,
                "deaths": 0,
                "casesVariation": 2,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-21",
                "cases": 30,
                "deaths": 0,
                "casesVariation": 3,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-22",
                "cases": 30,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-23",
                "cases": 30,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-24",
                "cases": 43,
                "deaths": 0,
                "casesVariation": 13,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-25",
                "cases": 45,
                "deaths": 0,
                "casesVariation": 2,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-26",
                "cases": 60,
                "deaths": 0,
                "casesVariation": 15,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-27",
                "cases": 60,
                "deaths": 0,
                "casesVariation": 0,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-28",
                "cases": 65,
                "deaths": 0,
                "casesVariation": 5,
                "deathsVariation": 0
            },
            {
                "date": "2020-02-29",
                "cases": 70,
                "deaths": 1,
                "casesVariation": 5,
                "deathsVariation": 1
            },
            {
                "date": "2020-03-01",
                "cases": 88,
                "deaths": 3,
                "casesVariation": 18,
                "deathsVariation": 2
            },
            {
                "date": "2020-03-02",
                "cases": 104,
                "deaths": 6,
                "casesVariation": 16,
                "deathsVariation": 3
            },
            {
                "date": "2020-03-03",
                "cases": 125,
                "deaths": 10,
                "casesVariation": 21,
                "deathsVariation": 4
            },
            {
                "date": "2020-03-04",
                "cases": 161,
                "deaths": 12,
                "casesVariation": 36,
                "deathsVariation": 2
            },
            {
                "date": "2020-03-05",
                "cases": 228,
                "deaths": 12,
                "casesVariation": 67,
                "deathsVariation": 0
            },
            {
                "date": "2020-03-06",
                "cases": 311,
                "deaths": 15,
                "casesVariation": 83,
                "deathsVariation": 3
            },
            {
                "date": "2020-03-07",
                "cases": 428,
                "deaths": 19,
                "casesVariation": 117,
                "deathsVariation": 4
            },
            {
                "date": "2020-03-08",
                "cases": 547,
                "deaths": 22,
                "casesVariation": 119,
                "deathsVariation": 3
            },
            {
                "date": "2020-03-09",
                "cases": 748,
                "deaths": 26,
                "casesVariation": 201,
                "deathsVariation": 4
            },
            {
                "date": "2020-03-10",
                "cases": 1018,
                "deaths": 31,
                "casesVariation": 270,
                "deathsVariation": 5
            },
            {
                "date": "2020-03-11",
                "cases": 1263,
                "deaths": 37,
                "casesVariation": 245,
                "deathsVariation": 6
            },
            {
                "date": "2020-03-12",
                "cases": 1668,
                "deaths": 43,
                "casesVariation": 405,
                "deathsVariation": 6
            },
            {
                "date": "2020-03-13",
                "cases": 2224,
                "deaths": 50,
                "casesVariation": 556,
                "deathsVariation": 7
            },
            {
                "date": "2020-03-14",
                "cases": 2898,
                "deaths": 60,
                "casesVariation": 674,
                "deathsVariation": 10
            },
            {
                "date": "2020-03-15",
                "cases": 3600,
                "deaths": 68,
                "casesVariation": 702,
                "deathsVariation": 8
            },
            {
                "date": "2020-03-16",
                "cases": 4507,
                "deaths": 91,
                "casesVariation": 907,
                "deathsVariation": 23
            },
            {
                "date": "2020-03-17",
                "cases": 5906,
                "deaths": 117,
                "casesVariation": 1399,
                "deathsVariation": 26
            },
            {
                "date": "2020-03-18",
                "cases": 8350,
                "deaths": 162,
                "casesVariation": 2444,
                "deathsVariation": 45
            },
            {
                "date": "2020-03-19",
                "cases": 12393,
                "deaths": 212,
                "casesVariation": 4043,
                "deathsVariation": 50
            },
            {
                "date": "2020-03-20",
                "cases": 18010,
                "deaths": 275,
                "casesVariation": 5617,
                "deathsVariation": 63
            },
            {
                "date": "2020-03-21",
                "cases": 24526,
                "deaths": 358,
                "casesVariation": 6516,
                "deathsVariation": 83
            },
            {
                "date": "2020-03-22",
                "cases": 33070,
                "deaths": 455,
                "casesVariation": 8544,
                "deathsVariation": 97
            },
            {
                "date": "2020-03-23",
                "cases": 43499,
                "deaths": 574,
                "casesVariation": 10429,
                "deathsVariation": 119
            },
            {
                "date": "2020-03-24",
                "cases": 54171,
                "deaths": 784,
                "casesVariation": 10672,
                "deathsVariation": 210
            },
            {
                "date": "2020-03-25",
                "cases": 68780,
                "deaths": 1049,
                "casesVariation": 14609,
                "deathsVariation": 265
            },
            {
                "date": "2020-03-26",
                "cases": 85639,
                "deaths": 1349,
                "casesVariation": 16859,
                "deathsVariation": 300
            },
            {
                "date": "2020-03-27",
                "cases": 103005,
                "deaths": 1761,
                "casesVariation": 17366,
                "deathsVariation": 412
            },
            {
                "date": "2020-03-28",
                "cases": 123944,
                "deaths": 2291,
                "casesVariation": 20939,
                "deathsVariation": 530
            },
            {
                "date": "2020-03-29",
                "cases": 142386,
                "deaths": 2628,
                "casesVariation": 18442,
                "deathsVariation": 337
            },
            {
                "date": "2020-03-30",
                "cases": 163876,
                "deaths": 3191,
                "casesVariation": 21490,
                "deathsVariation": 563
            },
            {
                "date": "2020-03-31",
                "cases": 188325,
                "deaths": 4010,
                "casesVariation": 24449,
                "deathsVariation": 819
            },
            {
                "date": "2020-04-01",
                "cases": 215463,
                "deaths": 5025,
                "casesVariation": 27138,
                "deathsVariation": 1015
            },
            {
                "date": "2020-04-02",
                "cases": 244592,
                "deaths": 6092,
                "casesVariation": 29129,
                "deathsVariation": 1067
            },
            {
                "date": "2020-04-03",
                "cases": 276962,
                "deaths": 7917,
                "casesVariation": 32370,
                "deathsVariation": 1825
            },
            {
                "date": "2020-04-04",
                "cases": 311801,
                "deaths": 9470,
                "casesVariation": 34839,
                "deathsVariation": 1553
            },
            {
                "date": "2020-04-05",
                "cases": 337591,
                "deaths": 10832,
                "casesVariation": 25790,
                "deathsVariation": 1362
            },
            {
                "date": "2020-04-06",
                "cases": 371110,
                "deaths": 13080,
                "casesVariation": 33519,
                "deathsVariation": 2248
            },
            {
                "date": "2020-04-07",
                "cases": 399350,
                "deaths": 14582,
                "casesVariation": 28240,
                "deathsVariation": 1502
            },
            {
                "date": "2020-04-08",
                "cases": 431133,
                "deaths": 16653,
                "casesVariation": 31783,
                "deathsVariation": 2071
            },
            {
                "date": "2020-04-09",
                "cases": 465846,
                "deaths": 18779,
                "casesVariation": 34713,
                "deathsVariation": 2126
            },
            {
                "date": "2020-04-10",
                "cases": 499303,
                "deaths": 21032,
                "casesVariation": 33457,
                "deathsVariation": 2253
            },
            {
                "date": "2020-04-11",
                "cases": 531028,
                "deaths": 23109,
                "casesVariation": 31725,
                "deathsVariation": 2077
            },
            {
                "date": "2020-04-12",
                "cases": 558153,
                "deaths": 24787,
                "casesVariation": 27125,
                "deathsVariation": 1678
            },
            {
                "date": "2020-04-13",
                "cases": 583940,
                "deaths": 26549,
                "casesVariation": 25787,
                "deathsVariation": 1762
            },
            {
                "date": "2020-04-14",
                "cases": 610546,
                "deaths": 29247,
                "casesVariation": 26606,
                "deathsVariation": 2698
            },
            {
                "date": "2020-04-15",
                "cases": 640380,
                "deaths": 31995,
                "casesVariation": 29834,
                "deathsVariation": 2748
            },
            {
                "date": "2020-04-16",
                "cases": 672244,
                "deaths": 34352,
                "casesVariation": 31864,
                "deathsVariation": 2357
            },
            {
                "date": "2020-04-17",
                "cases": 703661,
                "deaths": 36618,
                "casesVariation": 31417,
                "deathsVariation": 2266
            },
            {
                "date": "2020-04-18",
                "cases": 732036,
                "deaths": 38571,
                "casesVariation": 28375,
                "deathsVariation": 1953
            },
            {
                "date": "2020-04-19",
                "cases": 757390,
                "deaths": 40089,
                "casesVariation": 25354,
                "deathsVariation": 1518
            },
            {
                "date": "2020-04-20",
                "cases": 784658,
                "deaths": 41919,
                "casesVariation": 27268,
                "deathsVariation": 1830
            },
            {
                "date": "2020-04-21",
                "cases": 810146,
                "deaths": 44587,
                "casesVariation": 25488,
                "deathsVariation": 2668
            },
            {
                "date": "2020-04-22",
                "cases": 837999,
                "deaths": 46896,
                "casesVariation": 27853,
                "deathsVariation": 2309
            },
            {
                "date": "2020-04-23",
                "cases": 871888,
                "deaths": 49066,
                "casesVariation": 33889,
                "deathsVariation": 2170
            },
            {
                "date": "2020-04-24",
                "cases": 909473,
                "deaths": 51157,
                "casesVariation": 37585,
                "deathsVariation": 2091
            },
            {
                "date": "2020-04-25",
                "cases": 943755,
                "deaths": 53160,
                "casesVariation": 34282,
                "deathsVariation": 2003
            },
            {
                "date": "2020-04-26",
                "cases": 970353,
                "deaths": 54406,
                "casesVariation": 26598,
                "deathsVariation": 1246
            },
            {
                "date": "2020-04-27",
                "cases": 993710,
                "deaths": 55996,
                "casesVariation": 23357,
                "deathsVariation": 1590
            },
            {
                "date": "2020-04-28",
                "cases": 1018551,
                "deaths": 58374,
                "casesVariation": 24841,
                "deathsVariation": 2378
            },
            {
                "date": "2020-04-29",
                "cases": 1045061,
                "deaths": 60888,
                "casesVariation": 26510,
                "deathsVariation": 2514
            },
            {
                "date": "2020-04-30",
                "cases": 1075486,
                "deaths": 63099,
                "casesVariation": 30425,
                "deathsVariation": 2211
            },
            {
                "date": "2020-05-01",
                "cases": 1109434,
                "deaths": 64859,
                "casesVariation": 33948,
                "deathsVariation": 1760
            },
            {
                "date": "2020-05-02",
                "cases": 1138961,
                "deaths": 66444,
                "casesVariation": 29527,
                "deathsVariation": 1585
            },
            {
                "date": "2020-05-03",
                "cases": 1164994,
                "deaths": 67772,
                "casesVariation": 26033,
                "deathsVariation": 1328
            },
            {
                "date": "2020-05-04",
                "cases": 1186913,
                "deaths": 68832,
                "casesVariation": 21919,
                "deathsVariation": 1060
            },
            {
                "date": "2020-05-05",
                "cases": 1210627,
                "deaths": 71066,
                "casesVariation": 23714,
                "deathsVariation": 2234
            },
            {
                "date": "2020-05-06",
                "cases": 1235132,
                "deaths": 74010,
                "casesVariation": 24505,
                "deathsVariation": 2944
            },
            {
                "date": "2020-05-07",
                "cases": 1263875,
                "deaths": 75733,
                "casesVariation": 28743,
                "deathsVariation": 1723
            },
            {
                "date": "2020-05-08",
                "cases": 1291529,
                "deaths": 77306,
                "casesVariation": 27654,
                "deathsVariation": 1573
            },
            {
                "date": "2020-05-09",
                "cases": 1316439,
                "deaths": 78761,
                "casesVariation": 24910,
                "deathsVariation": 1455
            },
            {
                "date": "2020-05-10",
                "cases": 1336598,
                "deaths": 79692,
                "casesVariation": 20159,
                "deathsVariation": 931
            },
            {
                "date": "2020-05-11",
                "cases": 1354356,
                "deaths": 80681,
                "casesVariation": 17758,
                "deathsVariation": 989
            },
            {
                "date": "2020-05-12",
                "cases": 1376649,
                "deaths": 82336,
                "casesVariation": 22293,
                "deathsVariation": 1655
            },
            {
                "date": "2020-05-13",
                "cases": 1397833,
                "deaths": 84104,
                "casesVariation": 21184,
                "deathsVariation": 1768
            },
            {
                "date": "2020-05-14",
                "cases": 1424847,
                "deaths": 85842,
                "casesVariation": 27014,
                "deathsVariation": 1738
            },
            {
                "date": "2020-05-15",
                "cases": 1450964,
                "deaths": 87434,
                "casesVariation": 26117,
                "deathsVariation": 1592
            },
            {
                "date": "2020-05-16",
                "cases": 1474612,
                "deaths": 88660,
                "casesVariation": 23648,
                "deathsVariation": 1226
            },
            {
                "date": "2020-05-17",
                "cases": 1493597,
                "deaths": 89504,
                "casesVariation": 18985,
                "deathsVariation": 844
            },
            {
                "date": "2020-05-18",
                "cases": 1515373,
                "deaths": 90293,
                "casesVariation": 21776,
                "deathsVariation": 789
            },
            {
                "date": "2020-05-19",
                "cases": 1536471,
                "deaths": 91936,
                "casesVariation": 21098,
                "deathsVariation": 1643
            }
        ]
    }
)

//确诊人数最少Top10
Mock.mock(
    "/api/top10LeastCases",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "Northern Mariana Islands",
                "cases": 689,
                "deaths": 92
            },
            {
                "state": "Virgin Islands",
                "cases": 3028,
                "deaths": 150
            },
            {
                "state": "Alaska",
                "cases": 16291,
                "deaths": 328
            },
            {
                "state": "Montana",
                "cases": 21483,
                "deaths": 594
            },
            {
                "state": "Wyoming",
                "cases": 24368,
                "deaths": 222
            },
            {
                "state": "Hawaii",
                "cases": 28266,
                "deaths": 595
            },
            {
                "state": "Vermont",
                "cases": 40628,
                "deaths": 2049
            },
            {
                "state": "Guam",
                "cases": 42669,
                "deaths": 281
            },
            {
                "state": "North Dakota",
                "cases": 44513,
                "deaths": 962
            },
            {
                "state": "West Virginia",
                "cases": 47805,
                "deaths": 1593
            }
        ]
    }
)

//死亡人数最少Top10
Mock.mock(
    "/api/top10LeastDeaths",
    "post",
    {
        "status": 200,
        "message": "success",
        "data": [
            {
                "state": "Northern Mariana Islands",
                "cases": 689,
                "deaths": 92
            },
            {
                "state": "Virgin Islands",
                "cases": 3028,
                "deaths": 150
            },
            {
                "state": "Wyoming",
                "cases": 24368,
                "deaths": 222
            },
            {
                "state": "Guam",
                "cases": 42669,
                "deaths": 281
            },
            {
                "state": "Alaska",
                "cases": 16291,
                "deaths": 328
            },
            {
                "state": "Montana",
                "cases": 21483,
                "deaths": 594
            },
            {
                "state": "Hawaii",
                "cases": 28266,
                "deaths": 595
            },
            {
                "state": "South Dakota",
                "cases": 100555,
                "deaths": 877
            },
            {
                "state": "North Dakota",
                "cases": 44513,
                "deaths": 962
            },
            {
                "state": "West Virginia",
                "cases": 47805,
                "deaths": 1593
            }
        ]
    }
)

export default Mock
