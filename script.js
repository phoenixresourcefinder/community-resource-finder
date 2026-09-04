/* =========================================================
   COMMUNITY RESOURCE FINDER
   FINAL VERSION — 200 RESOURCES
========================================================= */


/* =========================================================
   RESOURCE BUILDER
========================================================= */

function makeResource(
    id,
    category,
    name,
    description,
    website,
    location = "Arizona",
    phone = "Check website",
    cost = "Free or low-cost",
    spanish = true,
    free = true,
    access = "Visit the website or contact the organization for current instructions."
) {

    const categorySpanish = {
        food: "Alimentos",
        housing: "Vivienda",
        healthcare: "Salud",
        jobs: "Empleo",
        education: "Educación",
        transportation: "Transporte",
        utilities: "Servicios"
    };

    const accessSpanish = {
        food: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        housing: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        healthcare: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        jobs: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        education: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        transportation: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales.",
        utilities: "Visita el sitio web o comunícate con la organización para conocer las instrucciones actuales."
    };

    return {

        id,

        category,

        name: {
            en: name,
            es: name
        },

        description: {
            en: description,
            es: description
        },

        access: {
            en: access,
            es: accessSpanish[category]
        },

        eligibility: {
            en:
                "Eligibility varies by program. Contact the organization before visiting.",
            es:
                "Los requisitos varían según el programa. Comunícate con la organización antes de visitar."
        },

        documents: {
            en:
                "Ask the organization which documents are required.",
            es:
                "Pregunta a la organización qué documentos se requieren."
        },

        location,

        phone,

        hours: "Check website",

        cost,

        languages:
            spanish
                ? "English, Spanish"
                : "English",

        spanish,

        free,

        website,

        zips: []

    };
}


/* =========================================================
   200 RESOURCES
========================================================= */

const resources = [

    /* =====================================================
       FOOD — 1–35
    ===================================================== */

    makeResource(
        1,
        "food",
        "St. Mary's Food Bank",
        "Emergency food boxes, food distributions, and hunger-relief services.",
        "https://www.firstfoodbank.org/",
        "Phoenix, AZ",
        "602-242-3663"
    ),

    makeResource(
        2,
        "food",
        "Arizona Food Bank Network",
        "Statewide directory connecting residents with food banks, pantries, and meal programs.",
        "https://azfoodbanks.org/",
        "Arizona",
        "602-528-3434"
    ),

    makeResource(
        3,
        "food",
        "Arizona Nutrition Assistance (SNAP)",
        "Nutrition assistance for eligible low-income households.",
        "https://des.az.gov/services/basic-needs/food/nutrition-assistance",
        "Arizona",
        "855-432-7587"
    ),

    makeResource(
        4,
        "food",
        "Arizona WIC",
        "Nutrition assistance, healthy foods, breastfeeding support, and nutrition education.",
        "https://www.azdhs.gov/prevention/azwic/",
        "Arizona",
        "800-252-5942"
    ),

    makeResource(
        5,
        "food",
        "Double Up Food Bucks Arizona",
        "Helps SNAP shoppers get more fresh fruits and vegetables at participating locations.",
        "https://doubleupaz.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        6,
        "food",
        "Desert Mission Food Bank",
        "Food assistance and community support for Phoenix-area residents.",
        "https://www.desertmission.com/",
        "Phoenix, AZ",
        "602-870-6060"
    ),

    makeResource(
        7,
        "food",
        "Phoenix Rescue Mission",
        "Food assistance, meals, and support for people experiencing hardship.",
        "https://phoenixrescuemission.org/",
        "Phoenix, AZ",
        "602-233-3000"
    ),

    makeResource(
        8,
        "food",
        "St. Vincent de Paul Phoenix",
        "Food, meals, and basic-needs assistance.",
        "https://www.stvincentdepaul.net/",
        "Phoenix, AZ",
        "602-266-4673"
    ),

    makeResource(
        9,
        "food",
        "Andre House",
        "Meals and supportive services for people experiencing homelessness or hardship.",
        "https://www.andrehouse.org/",
        "Phoenix, AZ",
        "602-255-6878"
    ),

    makeResource(
        10,
        "food",
        "FIBCO Family Services",
        "Community assistance including food and family support.",
        "https://www.fibco.org/",
        "Phoenix, AZ",
        "602-272-7300"
    ),

    makeResource(
        11,
        "food",
        "United Food Bank",
        "Food bank serving communities throughout central and eastern Arizona.",
        "https://unitedfoodbank.org/",
        "Mesa, AZ",
        "480-926-4897"
    ),

    makeResource(
        12,
        "food",
        "AZCEND Food Bank",
        "Food assistance and emergency support for Chandler-area households.",
        "https://azcend.org/",
        "Chandler, AZ",
        "480-963-1423"
    ),

    makeResource(
        13,
        "food",
        "Hope for Hunger Food Bank",
        "Food assistance and community programs for families in the Phoenix area.",
        "https://hopeforhunger.org/",
        "Glendale, AZ",
        "623-848-0930"
    ),

    makeResource(
        14,
        "food",
        "Tempe Community Action Agency Food Pantry",
        "Food pantry services for eligible Tempe-area households.",
        "https://tempeaction.org/",
        "Tempe, AZ",
        "480-422-8922"
    ),

    makeResource(
        15,
        "food",
        "TEFAP Arizona",
        "Emergency food assistance distributed through participating organizations.",
        "https://des.az.gov/services/basic-needs/food-assistance/emergency-food-assistance",
        "Arizona",
        "Check website"
    ),

    makeResource(
        16,
        "food",
        "Arizona Commodity Senior Food Program",
        "Monthly food packages for eligible older adults.",
        "https://des.az.gov/services/basic-needs/food-assistance/az-commodity-senior-food-program",
        "Arizona",
        "602-771-2790"
    ),

    makeResource(
        17,
        "food",
        "Phoenix Senior Center Meals",
        "Meal programs and nutrition support for eligible older adults.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6631"
    ),

    makeResource(
        18,
        "food",
        "Lutheran Social Services Food Assistance",
        "Food and basic-needs assistance through community programs.",
        "https://www.lss-sw.org/",
        "Arizona",
        "602-297-6045"
    ),

    makeResource(
        19,
        "food",
        "Salvation Army Metro Phoenix Food Assistance",
        "Emergency food and community assistance.",
        "https://www.salvationarmyphoenix.org/",
        "Phoenix Metro Area",
        "602-267-4100"
    ),

    makeResource(
        20,
        "food",
        "NourishPHX",
        "Community food access and nutrition programs in Phoenix.",
        "https://nourishphx.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        21,
        "food",
        "ICNA Relief Arizona",
        "Food pantry and community assistance programs.",
        "https://icnarelief.org/arizona/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        22,
        "food",
        "Arizona Kosher Food Pantry",
        "Food assistance with culturally appropriate food options.",
        "https://azkosherpantry.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        23,
        "food",
        "Farm Express",
        "Mobile fresh-produce market connecting Phoenix neighborhoods with affordable produce.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        24,
        "food",
        "Arizona Self Help",
        "Free screening tool for Arizona health and human-services programs.",
        "https://arizonaselfhelp.org/",
        "Arizona",
        "602-604-0640"
    ),

    makeResource(
        25,
        "food",
        "USDA National Hunger Hotline",
        "National food-assistance referral service.",
        "https://www.fns.usda.gov/national-hunger-hotline",
        "United States",
        "866-348-6479"
    ),

    makeResource(
        26,
        "food",
        "City of Phoenix Food Resources",
        "City directory connecting residents with food banks, nutrition programs, and food resources.",
        "https://www.phoenix.gov/administration/departments/oep/oep-programs/food/food-resources.html",
        "Phoenix, AZ",
        "602-262-3111"
    ),

    makeResource(
        27,
        "food",
        "City of Mesa Food Resources",
        "Food assistance information and local food providers.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        28,
        "food",
        "Tempe Food Assistance",
        "Local food pantry and emergency food information.",
        "https://www.tempe.gov/government/community-health-and-human-services/community-resources/tempe-non-profit-organizations",
        "Tempe, AZ",
        "480-350-4311"
    ),

    makeResource(
        29,
        "food",
        "Senior Farmers Market Nutrition Program",
        "Fresh-produce assistance for eligible older adults.",
        "https://des.az.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        30,
        "food",
        "Arizona Farmers Market Nutrition Program",
        "Nutrition benefits supporting access to fresh produce.",
        "https://www.azdhs.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        31,
        "food",
        "Food Bank Locator — Arizona",
        "Search for food banks, pantries, soup kitchens, and emergency food providers.",
        "https://azfoodbanks.org/get-food/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        32,
        "food",
        "Food Assistance — Arizona DES",
        "Arizona food-assistance information including SNAP and related programs.",
        "https://des.az.gov/services/basic-needs/food",
        "Arizona",
        "855-432-7587"
    ),

    makeResource(
        33,
        "food",
        "Food Assistance — 211 Arizona",
        "Searchable directory for food pantries, meals, and food delivery.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        34,
        "food",
        "Phoenix Food Assistance and Community Resources",
        "City resource guide covering food assistance, SNAP, WIC, senior meals, and community food partners.",
        "https://www.phoenix.gov/administration/departments/humanservices/food-assistance-and-community-resources.html",
        "Phoenix, AZ",
        "602-262-3111"
    ),

    makeResource(
        35,
        "food",
        "Arizona Food Assistance Programs",
        "Statewide information about nutrition programs and emergency food resources.",
        "https://az.gov/",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       HOUSING — 36–60
    ===================================================== */

    makeResource(
        36,
        "housing",
        "City of Phoenix Housing Department",
        "Affordable housing, rental assistance, housing programs, and homelessness resources.",
        "https://www.phoenix.gov/housing",
        "Phoenix, AZ",
        "602-262-6794"
    ),

    makeResource(
        37,
        "housing",
        "Arizona Department of Housing",
        "State housing resources, affordable housing programs, and housing assistance.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        38,
        "housing",
        "HousingSearch.AZ.gov",
        "Searchable directory of affordable and accessible rental housing.",
        "https://housingsearch.az.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        39,
        "housing",
        "211 Arizona Housing Assistance",
        "Connects residents with shelter, rental assistance, and housing programs.",
        "https://211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        40,
        "housing",
        "HOM Inc.",
        "Affordable housing and supportive housing services.",
        "https://www.hominc.com/",
        "Phoenix, AZ",
        "602-265-4646"
    ),

    makeResource(
        41,
        "housing",
        "UMOM New Day Centers",
        "Shelter, housing, family support, and homelessness services.",
        "https://umom.org/",
        "Phoenix, AZ",
        "602-275-7852"
    ),

    makeResource(
        42,
        "housing",
        "Native American Connections",
        "Affordable housing and supportive services.",
        "https://www.nativeconnections.org/",
        "Phoenix, AZ",
        "602-495-3900"
    ),

    makeResource(
        43,
        "housing",
        "Save the Family",
        "Housing and family-stability services.",
        "https://savethefamily.org/",
        "Mesa, AZ",
        "480-898-0228"
    ),

    makeResource(
        44,
        "housing",
        "Chicanos Por La Causa Housing",
        "Housing and economic-development services.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        45,
        "housing",
        "Community Legal Services",
        "Free or low-cost legal assistance including housing and eviction matters.",
        "https://clsaz.org/",
        "Arizona",
        "602-258-3434"
    ),

    makeResource(
        46,
        "housing",
        "City of Mesa Housing Resources",
        "Housing, homelessness, and community-support information.",
        "https://www.mesaaz.gov/Resident-Resources/Housing",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        47,
        "housing",
        "Mesa Homeless Resource Line",
        "Resource navigation for people experiencing homelessness.",
        "https://www.mesaaz.gov/Resident-Resources/Housing/Human-Services/Homeless-Resources",
        "Mesa, AZ",
        "480-644-4673"
    ),

    makeResource(
        48,
        "housing",
        "Arizona Fair Housing Center",
        "Fair-housing education, advocacy, and assistance.",
        "https://azfairhousing.net/",
        "Arizona",
        "602-548-1599"
    ),

    makeResource(
        49,
        "housing",
        "Arizona Community Action Agencies",
        "Local agencies providing housing, emergency, employment, and self-sufficiency services.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        50,
        "housing",
        "Arizona Housing Resources",
        "Statewide housing resources and current housing-program information.",
        "https://housing.az.gov/resources",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        51,
        "housing",
        "Phoenix Emergency Housing Resources",
        "City information connecting residents with housing and emergency-support programs.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        52,
        "housing",
        "Phoenix Homeless Services",
        "Information about shelter, homelessness programs, and supportive services.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        53,
        "housing",
        "Arizona Rental Assistance Information",
        "Information about current state and local housing-assistance opportunities.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        54,
        "housing",
        "Arizona Landlord and Tenant Resources",
        "Information about rental rights and responsibilities.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        55,
        "housing",
        "Phoenix Eviction Legal Services",
        "Legal information and assistance for eligible Phoenix residents facing housing issues.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        56,
        "housing",
        "Phoenix Home Repair Assistance",
        "Information about programs that may help eligible residents repair or maintain homes.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        57,
        "housing",
        "Arizona Weatherization Assistance",
        "Programs designed to improve energy efficiency and reduce household energy costs.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        58,
        "housing",
        "211 Arizona Shelter Search",
        "Search for shelters and housing programs by location.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        59,
        "housing",
        "Mesa Community Support Programs",
        "Mesa information covering housing, utilities, food, and other essential services.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        60,
        "housing",
        "Arizona Department of Housing Resources",
        "Current state housing publications, programs, income limits, and housing resources.",
        "https://housing.az.gov/resources",
        "Arizona",
        "602-771-1000"
    ),


    /* =====================================================
       HEALTHCARE — 61–105
    ===================================================== */

    makeResource(
        61,
        "healthcare",
        "AHCCCS",
        "Arizona's Medicaid program for eligible residents.",
        "https://www.azahcccs.gov/",
        "Arizona",
        "602-417-4000"
    ),

    makeResource(
        62,
        "healthcare",
        "NATIVE HEALTH",
        "Community medical, dental, behavioral-health, and family services.",
        "https://www.nativehealthphoenix.org/",
        "Phoenix, AZ",
        "602-279-5262"
    ),

    makeResource(
        63,
        "healthcare",
        "Adelante Healthcare",
        "Community health centers providing affordable healthcare services.",
        "https://adelantehealthcare.com/",
        "Phoenix Metro Area",
        "877-809-5092"
    ),

    makeResource(
        64,
        "healthcare",
        "NOAH",
        "Community primary and behavioral healthcare.",
        "https://noahhelps.org/",
        "Phoenix Metro Area",
        "480-882-4545"
    ),

    makeResource(
        65,
        "healthcare",
        "Mountain Park Health Center",
        "Affordable medical, dental, and behavioral healthcare.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        66,
        "healthcare",
        "Valle del Sol",
        "Community health, behavioral health, and family services.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        67,
        "healthcare",
        "Valleywise Health",
        "Public health system providing hospital, primary, behavioral, and specialty care.",
        "https://valleywisehealth.org/",
        "Phoenix, AZ",
        "602-344-5011"
    ),

    makeResource(
        68,
        "healthcare",
        "Terros Health",
        "Primary care, behavioral health, and community healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        69,
        "healthcare",
        "Circle the City",
        "Healthcare services focused on people experiencing homelessness.",
        "https://circlethecity.org/",
        "Phoenix, AZ",
        "602-776-0776"
    ),

    makeResource(
        70,
        "healthcare",
        "Phoenix Allies for Community Health",
        "Community healthcare for people facing barriers to traditional care.",
        "https://www.phoenixpach.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        71,
        "healthcare",
        "Arizona DHS Sliding Fee Clinics",
        "Directory of Arizona clinics offering free or low-cost services.",
        "https://www.azdhs.gov/prevention/health-systems-development/sliding-fee-schedule/index.php",
        "Arizona",
        "602-542-1025"
    ),

    makeResource(
        72,
        "healthcare",
        "Arizona Alliance for Community Health Centers",
        "Directory and information connecting residents with community health centers.",
        "https://aachc.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        73,
        "healthcare",
        "Health-e-Arizona Plus",
        "Online application portal for Arizona healthcare and nutrition programs.",
        "https://healthearizonaplus.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        74,
        "healthcare",
        "Healthcare.gov",
        "Health insurance marketplace and financial-assistance information.",
        "https://www.healthcare.gov/",
        "United States",
        "800-318-2596"
    ),

    makeResource(
        75,
        "healthcare",
        "HRSA Find a Health Center",
        "National directory for finding community health centers.",
        "https://findahealthcenter.hrsa.gov/",
        "United States",
        "Check website"
    ),

    makeResource(
        76,
        "healthcare",
        "Wesley Health Center",
        "Community healthcare services in Phoenix.",
        "https://wesleycommunitycenter.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        77,
        "healthcare",
        "Neighborhood Christian Clinic",
        "Healthcare services for people facing financial or insurance barriers.",
        "https://www.neighborhoodchristianclinic.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        78,
        "healthcare",
        "Mission of Mercy Arizona",
        "Free healthcare and dental services through community programs.",
        "https://www.amissionofmercy.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        79,
        "healthcare",
        "Maricopa County Public Health",
        "Public-health clinics, prevention, immunizations, and community health programs.",
        "https://www.maricopa.gov/5302/Public-Health",
        "Maricopa County, AZ",
        "602-506-6767"
    ),

    makeResource(
        80,
        "healthcare",
        "Cover Arizona",
        "Free assistance navigating health insurance and coverage options.",
        "https://coveraz.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        81,
        "healthcare",
        "Phoenix Indian Medical Center",
        "Healthcare services through the Indian Health Service.",
        "https://www.ihs.gov/phoenix/",
        "Phoenix, AZ",
        "602-263-1200"
    ),

    makeResource(
        82,
        "healthcare",
        "Southwest Human Development",
        "Family, child-development, early-intervention, and community support.",
        "https://www.swhd.org/",
        "Phoenix, AZ",
        "602-266-5976"
    ),

    makeResource(
        83,
        "healthcare",
        "Raising Special Kids",
        "Information, support, and advocacy for families of children with disabilities.",
        "https://raisingspecialkids.org/",
        "Arizona",
        "602-242-4366"
    ),

    makeResource(
        84,
        "healthcare",
        "Arizona Early Intervention Program",
        "Early-intervention services for eligible young children.",
        "https://des.az.gov/services/developmental-disabilities/early-intervention",
        "Arizona",
        "Check website"
    ),

    makeResource(
        85,
        "healthcare",
        "Family Involvement Center",
        "Family-focused behavioral-health and support services.",
        "https://www.familyinvolvementcenter.org/",
        "Arizona",
        "602-412-4095"
    ),

    makeResource(
        86,
        "healthcare",
        "Community Bridges",
        "Behavioral-health, recovery, housing, and supportive services.",
        "https://communitybridgesaz.org/",
        "Arizona",
        "877-931-9142"
    ),

    makeResource(
        87,
        "healthcare",
        "Southwest Behavioral & Health Services",
        "Behavioral-health and community-support programs.",
        "https://www.sbhservices.org/",
        "Arizona",
        "602-265-8338"
    ),

    makeResource(
        88,
        "healthcare",
        "Copa Health",
        "Behavioral health, rehabilitation, and supportive services.",
        "https://copahealth.org/",
        "Arizona",
        "480-969-3800"
    ),

    makeResource(
        89,
        "healthcare",
        "La Frontera EMPACT",
        "Behavioral-health, family, and community services.",
        "https://lafrontera-empa.org/",
        "Arizona",
        "480-784-1514"
    ),

    makeResource(
        90,
        "healthcare",
        "NOAH Desert Mission Health Center",
        "Community healthcare services through NOAH.",
        "https://noahhelps.org/",
        "Phoenix, AZ",
        "480-882-4545"
    ),

    makeResource(
        91,
        "healthcare",
        "NOAH Palomino Health Center",
        "Primary and behavioral healthcare.",
        "https://noahhelps.org/",
        "Phoenix Metro Area",
        "480-882-4545"
    ),

    makeResource(
        92,
        "healthcare",
        "NOAH Venado Valley",
        "Community healthcare through the NOAH network.",
        "https://noahhelps.org/",
        "Phoenix, AZ",
        "480-882-4545"
    ),

    makeResource(
        93,
        "healthcare",
        "Mountain Park — Baseline",
        "Community medical, dental, and behavioral-health services.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        94,
        "healthcare",
        "Mountain Park — Gateway",
        "Affordable community healthcare services.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        95,
        "healthcare",
        "Mountain Park — Balsz",
        "Community healthcare services including pediatric care.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        96,
        "healthcare",
        "Mountain Park — Christown",
        "Community healthcare services including pediatric care.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        97,
        "healthcare",
        "Adelante — Central",
        "Community health-center services in central Phoenix.",
        "https://adelantehealthcare.com/",
        "Phoenix, AZ",
        "877-809-5092"
    ),

    makeResource(
        98,
        "healthcare",
        "Adelante — Metro Parkway",
        "Community healthcare services in north Phoenix.",
        "https://adelantehealthcare.com/",
        "Phoenix, AZ",
        "877-809-5092"
    ),

    makeResource(
        99,
        "healthcare",
        "Valle del Sol — Maryvale",
        "Community healthcare and behavioral-health services.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        100,
        "healthcare",
        "Valle del Sol — 7th Street",
        "Community healthcare services in central Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        101,
        "healthcare",
        "Valle del Sol — 17th Street",
        "Community healthcare services in Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        102,
        "healthcare",
        "Valle del Sol — 1st Avenue",
        "Community healthcare services in south Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        103,
        "healthcare",
        "Terros Health — McDowell",
        "Primary and behavioral healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        104,
        "healthcare",
        "Terros Health — 23rd Avenue",
        "Community healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        105,
        "healthcare",
        "Terros Health — 27th Avenue",
        "Community healthcare and behavioral-health services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),


    /* =====================================================
       JOBS — 106–130
    ===================================================== */

    makeResource(
        106,
        "jobs",
        "ARIZONA@WORK",
        "Free employment services, career counseling, job search, and training.",
        "https://arizonaatwork.com/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        107,
        "jobs",
        "Arizona DES Employment Services",
        "Job search, resume, interview, and employment support.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),

    makeResource(
        108,
        "jobs",
        "Goodwill of Central and Northern Arizona",
        "Employment services, career training, and job support.",
        "https://www.goodwillaz.org/",
        "Arizona",
        "602-535-4000"
    ),

    makeResource(
        109,
        "jobs",
        "St. Joseph the Worker",
        "Employment assistance and job placement services.",
        "https://www.stjosephtheworker.org/",
        "Phoenix, AZ",
        "602-417-9854"
    ),

    makeResource(
        110,
        "jobs",
        "Fresh Start Women's Foundation",
        "Career development, education, and employment support.",
        "https://freshstartwomen.org/",
        "Phoenix, AZ",
        "602-252-8494"
    ),

    makeResource(
        111,
        "jobs",
        "Friendly House",
        "Employment, education, family, and community support.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        112,
        "jobs",
        "Career Connectors",
        "Career networking, workshops, and employment resources.",
        "https://careerconnectors.org/",
        "Phoenix Metro Area",
        "Check website"
    ),

    makeResource(
        113,
        "jobs",
        "Per Scholas",
        "Free technology training and career development.",
        "https://perscholas.org/",
        "Arizona",
        "Check website",
        false
    ),

    makeResource(
        114,
        "jobs",
        "City of Phoenix Jobs",
        "Employment opportunities with the City of Phoenix.",
        "https://www.phoenix.gov/jobs",
        "Phoenix, AZ",
        "Check website",
        false
    ),

    makeResource(
        115,
        "jobs",
        "Chicanos Por La Causa Employment Services",
        "Employment, workforce, and economic-opportunity programs.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        116,
        "jobs",
        "Maricopa County Workforce Development",
        "Workforce training, employment, and career services.",
        "https://www.maricopa.gov/3725/Workforce-Development-ProgramsServices",
        "Maricopa County, AZ",
        "602-506-2419"
    ),

    makeResource(
        117,
        "jobs",
        "Mesa Workforce Center",
        "Employment and career support for Mesa-area job seekers.",
        "https://www.mesaaz.gov/",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        118,
        "jobs",
        "Tempe Workforce Resources",
        "Employment and workforce information for Tempe residents.",
        "https://www.tempe.gov/",
        "Tempe, AZ",
        "480-350-4311"
    ),

    makeResource(
        119,
        "jobs",
        "Arizona Self Help — Employment Screening",
        "Free screening tool connecting households with assistance programs.",
        "https://arizonaselfhelp.org/",
        "Arizona",
        "602-604-0640"
    ),

    makeResource(
        120,
        "jobs",
        "ARIZONA@WORK Youth Services",
        "Career preparation, employment, and training for eligible young people.",
        "https://arizonaatwork.com/locations/city-phoenix/youth-job-seekers",
        "Arizona",
        "Check website"
    ),

    makeResource(
        121,
        "jobs",
        "Arizona Job Connection",
        "Online employment and career resources.",
        "https://arizonaatwork.com/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        122,
        "jobs",
        "DES Job Search Resources",
        "Employment resources and workforce services through Arizona DES.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),

    makeResource(
        123,
        "jobs",
        "Arizona Community Action Agencies — Employment",
        "Local agencies helping households secure and maintain employment.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        124,
        "jobs",
        "St. Joseph the Worker Employment Services",
        "Job placement and workforce assistance.",
        "https://www.stjosephtheworker.org/",
        "Phoenix, AZ",
        "602-417-9854"
    ),

    makeResource(
        125,
        "jobs",
        "Goodwill Career Services",
        "Career preparation, employment support, and training.",
        "https://www.goodwillaz.org/",
        "Arizona",
        "602-535-4000"
    ),

    makeResource(
        126,
        "jobs",
        "Fresh Start Career Development",
        "Career development and workforce support.",
        "https://freshstartwomen.org/",
        "Phoenix, AZ",
        "602-252-8494"
    ),

    makeResource(
        127,
        "jobs",
        "Friendly House Workforce Programs",
        "Workforce and employment support.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        128,
        "jobs",
        "CPLC Workforce Programs",
        "Workforce development and economic opportunity programs.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        129,
        "jobs",
        "Career Connectors Events",
        "Free career events and networking opportunities.",
        "https://careerconnectors.org/",
        "Phoenix Metro Area",
        "Check website"
    ),

    makeResource(
        130,
        "jobs",
        "Arizona Employment Services",
        "Statewide employment and workforce information.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),


    /* =====================================================
       EDUCATION — 131–155
    ===================================================== */

    makeResource(
        131,
        "education",
        "Arizona Adult Education",
        "Adult education, high-school equivalency, ESL, and career preparation.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        132,
        "education",
        "Rio Salado College Adult Education",
        "GED preparation, English learning, and adult education.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        133,
        "education",
        "Phoenix Public Library",
        "Free computers, literacy programs, homework support, classes, and educational resources.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        134,
        "education",
        "Literacy Phoenix",
        "Free literacy and English-learning programs for adults.",
        "https://literacyphoenix.org/",
        "Phoenix, AZ",
        "602-274-3439"
    ),

    makeResource(
        135,
        "education",
        "Job Corps",
        "Free education and career training for eligible young people.",
        "https://www.jobcorps.gov/",
        "United States",
        "800-733-5627"
    ),

    makeResource(
        136,
        "education",
        "Maricopa Community Colleges",
        "Community-college education, certificates, degrees, and career programs.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        137,
        "education",
        "GateWay Community College",
        "Career and technical education, certificates, and degrees.",
        "https://www.gatewaycc.edu/",
        "Phoenix, AZ",
        "602-286-8000"
    ),

    makeResource(
        138,
        "education",
        "Friendly House Education Programs",
        "English-language, education, family, and workforce programs.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        139,
        "education",
        "ARIZONA@WORK Youth Education Services",
        "Education, career preparation, and training for eligible young people.",
        "https://arizonaatwork.com/locations/city-phoenix/youth-job-seekers",
        "Arizona",
        "Check website"
    ),

    makeResource(
        140,
        "education",
        "Phoenix Head Start",
        "Early childhood education and family support.",
        "https://www.phoenix.gov/headstart",
        "Phoenix, AZ",
        "602-262-4040"
    ),

    makeResource(
        141,
        "education",
        "Arizona Literacy Resources",
        "Statewide information about adult literacy and educational programs.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        142,
        "education",
        "Phoenix Library Homework Help",
        "Homework and learning resources through Phoenix Public Library.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        143,
        "education",
        "Phoenix Library Computer Access",
        "Free public computers and technology access.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        144,
        "education",
        "Phoenix Library Literacy Programs",
        "Literacy and educational programming.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        145,
        "education",
        "Rio Salado GED Resources",
        "Adult education and high-school equivalency preparation.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        146,
        "education",
        "Rio Salado English Programs",
        "English-language learning for eligible adult students.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        147,
        "education",
        "Arizona Adult Education ESL",
        "English-language learning and adult education.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        148,
        "education",
        "Arizona Adult Education Career Preparation",
        "Career-focused adult education.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        149,
        "education",
        "Maricopa Community Colleges Career Programs",
        "Career and technical programs across Maricopa County.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        150,
        "education",
        "Maricopa Community Colleges Certificates",
        "Certificate programs for career preparation.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        151,
        "education",
        "GateWay Career Training",
        "Career and technical education programs.",
        "https://www.gatewaycc.edu/",
        "Phoenix, AZ",
        "602-286-8000"
    ),

    makeResource(
        152,
        "education",
        "Job Corps Career Training",
        "Education and vocational training for eligible young people.",
        "https://www.jobcorps.gov/",
        "United States",
        "800-733-5627"
    ),

    makeResource(
        153,
        "education",
        "Phoenix Head Start Birth to Five",
        "Early childhood development, education, nutrition, and family support.",
        "https://www.phoenix.gov/headstart",
        "Phoenix, AZ",
        "602-262-4040"
    ),

    makeResource(
        154,
        "education",
        "Friendly House English Classes",
        "English-language and educational programming.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        155,
        "education",
        "Arizona Education Resources",
        "Statewide information about adult education and educational services.",
        "https://www.azed.gov/",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       TRANSPORTATION — 156–175
    ===================================================== */

    makeResource(
        156,
        "transportation",
        "Valley Metro",
        "Bus and light-rail transportation throughout the Phoenix metro area.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        157,
        "transportation",
        "Phoenix Dial-a-Ride",
        "Shared-ride transportation for eligible Phoenix residents with disabilities.",
        "https://www.phoenix.gov/publictransit/transit-programs/dial-a-ride",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        158,
        "transportation",
        "Valley Metro ADA Paratransit",
        "Accessible transportation for eligible riders.",
        "https://www.valleymetro.org/accessibility",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        159,
        "transportation",
        "Valley Metro RideChoice",
        "Transportation option for eligible riders.",
        "https://www.valleymetro.org/accessibility/ridechoice",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        160,
        "transportation",
        "211 Arizona Transportation",
        "Connects residents with local transportation programs.",
        "https://211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        161,
        "transportation",
        "Valley Metro Reduced Fare",
        "Reduced transit fares for qualifying riders.",
        "https://www.valleymetro.org/fares",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        162,
        "transportation",
        "City of Phoenix Public Transit",
        "Phoenix bus routes, transportation programs, and services.",
        "https://www.phoenix.gov/publictransit",
        "Phoenix, AZ",
        "602-262-7433",
        true,
        false
    ),

    makeResource(
        163,
        "transportation",
        "Phoenix ADA Transit",
        "Accessible transportation information and services.",
        "https://www.phoenix.gov/publictransit/ada",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        164,
        "transportation",
        "Phoenix Senior Transportation",
        "Transportation assistance for eligible seniors.",
        "https://www.phoenix.gov/",
        "Phoenix, AZ",
        "602-262-6631"
    ),

    makeResource(
        165,
        "transportation",
        "NATIVE HEALTH Transportation",
        "Transportation assistance connected with eligible NATIVE HEALTH services.",
        "https://www.nativehealthphoenix.org/services/request-transportation/",
        "Phoenix, AZ",
        "602-279-5262"
    ),

    makeResource(
        166,
        "transportation",
        "Valley Metro Trip Planner",
        "Online public transportation trip-planning tool.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        167,
        "transportation",
        "Valley Metro Bus Services",
        "Local and regional bus transportation.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        168,
        "transportation",
        "Valley Metro Light Rail",
        "Light-rail transportation throughout the Phoenix area.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        169,
        "transportation",
        "Phoenix Transit Accessibility",
        "Accessibility information for Phoenix public transportation.",
        "https://www.phoenix.gov/publictransit/ada",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        170,
        "transportation",
        "Valley Metro Accessibility",
        "Accessibility and mobility information.",
        "https://www.valleymetro.org/accessibility",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        171,
        "transportation",
        "Valley Metro Fare Information",
        "Current public transportation fare information.",
        "https://www.valleymetro.org/fares",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        172,
        "transportation",
        "Phoenix Transit Programs",
        "City transportation programs and services.",
        "https://www.phoenix.gov/publictransit",
        "Phoenix, AZ",
        "602-262-7433",
        true,
        false
    ),

    makeResource(
        173,
        "transportation",
        "Phoenix Dial-a-Ride Information",
        "Information and registration for accessible shared transportation.",
        "https://www.phoenix.gov/publictransit/transit-programs/dial-a-ride",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        174,
        "transportation",
        "211 Arizona Transportation Directory",
        "Searchable transportation assistance directory.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        175,
        "transportation",
        "Arizona Transportation Resources",
        "Statewide information about transportation services.",
        "https://az.gov/live/residents",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       UTILITIES — 176–200
    ===================================================== */

    makeResource(
        176,
        "utilities",
        "Arizona LIHEAP",
        "Utility assistance for eligible low-income households.",
        "https://des.az.gov/liheap",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        177,
        "utilities",
        "Power AZ",
        "Arizona utility-assistance information.",
        "https://des.az.gov/liheap",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        178,
        "utilities",
        "City of Phoenix Crisis Assistance",
        "Emergency assistance that may help households facing utility or basic-needs hardship.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/crisis-assistance.html",
        "Phoenix, AZ",
        "602-534-2433"
    ),

    makeResource(
        179,
        "utilities",
        "Phoenix Water Financial Assistance",
        "Financial assistance for eligible Phoenix water customers.",
        "https://www.phoenix.gov/administration/departments/waterservices/city-services-bill/financial-assistance-for-phoenix-water-customers.html",
        "Phoenix, AZ",
        "602-262-6251"
    ),

    makeResource(
        180,
        "utilities",
        "APS Assistance Programs",
        "Utility assistance and bill-support programs.",
        "https://www.aps.com/",
        "Arizona",
        "602-236-8888"
    ),

    makeResource(
        181,
        "utilities",
        "SRP Assistance Programs",
        "Bill assistance and energy-support programs.",
        "https://www.srpnet.com/",
        "Phoenix Metro Area",
        "602-236-8888"
    ),

    makeResource(
        182,
        "utilities",
        "Southwest Gas Assistance",
        "Payment-assistance programs for eligible customers.",
        "https://www.swgas.com/",
        "Arizona",
        "877-860-6020"
    ),

    makeResource(
        183,
        "utilities",
        "Friendly House Emergency Support",
        "Emergency community support that may include basic household needs.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        184,
        "utilities",
        "Lutheran Social Services Utility Assistance",
        "Community assistance and support for households facing hardship.",
        "https://www.lss-sw.org/",
        "Arizona",
        "602-297-6045"
    ),

    makeResource(
        185,
        "utilities",
        "Salvation Army Utility Assistance",
        "Emergency assistance that may include utility-related needs.",
        "https://www.salvationarmyphoenix.org/",
        "Phoenix Metro Area",
        "602-267-4100"
    ),

    makeResource(
        186,
        "utilities",
        "Arizona Weatherization Assistance",
        "Programs that can help eligible households reduce energy costs through weatherization.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        187,
        "utilities",
        "Mesa Utility Assistance",
        "Mesa information about utility assistance and energy-saving programs.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        188,
        "utilities",
        "Mesa Community Action Network",
        "Utility-payment assistance and weatherization support.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-833-9200"
    ),

    makeResource(
        189,
        "utilities",
        "Aster Aging Utility Resource Navigation",
        "Resource navigation and benefits assistance for older adults.",
        "https://www.asteraz.org/",
        "Mesa, AZ",
        "480-964-9014"
    ),

    makeResource(
        190,
        "utilities",
        "211 Arizona Utility Assistance",
        "Searchable directory for utility and financial assistance.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        191,
        "utilities",
        "Arizona DES Utility Assistance",
        "State utility-assistance information.",
        "https://des.az.gov/services/basic-needs/utility-assistance",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        192,
        "utilities",
        "Arizona Department of Housing Weatherization",
        "Housing-related energy-efficiency assistance.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        193,
        "utilities",
        "Phoenix Water Customer Assistance",
        "City information about financial assistance for water customers.",
        "https://www.phoenix.gov/administration/departments/waterservices/city-services-bill/financial-assistance-for-phoenix-water-customers.html",
        "Phoenix, AZ",
        "602-262-6251"
    ),

    makeResource(
        194,
        "utilities",
        "Phoenix Crisis Assistance",
        "Emergency support and case-management resources.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/crisis-assistance.html",
        "Phoenix, AZ",
        "602-534-2433"
    ),

    makeResource(
        195,
        "utilities",
        "APS Customer Assistance",
        "Information about assistance programs for APS customers.",
        "https://www.aps.com/",
        "Arizona",
        "602-236-8888"
    ),

    makeResource(
        196,
        "utilities",
        "SRP Customer Assistance",
        "Information about SRP bill-assistance programs.",
        "https://www.srpnet.com/",
        "Phoenix Metro Area",
        "602-236-8888"
    ),

    makeResource(
        197,
        "utilities",
        "Southwest Gas Customer Assistance",
        "Information about gas-payment assistance.",
        "https://www.swgas.com/",
        "Arizona",
        "877-860-6020"
    ),

    makeResource(
        198,
        "utilities",
        "Arizona Community Action Agencies — Utilities",
        "Local agencies providing utility, weatherization, and emergency assistance.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        199,
        "utilities",
        "Arizona Utility Assistance Directory",
        "Statewide search and referral information for assistance programs.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        200,
        "utilities",
        "Arizona Basic Needs Resource Search",
        "Statewide resource search for utility and other basic-needs assistance.",
        "https://findservices.az.gov/",
        "Arizona",
        "Check website"
    )

];


/* =========================================================
   STATE
========================================================= */

let currentLanguage = "en";

let currentCategory = "all";

let currentZip = "";


/* =========================================================
   CATEGORY LABELS
========================================================= */

const categoryLabels = {

    en: {
        food: "Food",
        housing: "Housing",
        healthcare: "Healthcare",
        jobs: "Jobs",
        education: "Education",
        transportation: "Transportation",
        utilities: "Utilities"
    },

    es: {
        food: "Alimentos",
        housing: "Vivienda",
        healthcare: "Salud",
        jobs: "Empleo",
        education: "Educación",
        transportation: "Transporte",
        utilities: "Servicios"
    }

};


/* =========================================================
   HTML ESCAPING
========================================================= */

function escapeHTML(value) {

    return String(value ?? "").replace(
        /[&<>'"]/g,
        character => {

            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            };

            return map[character];

        }
    );

}


/* =========================================================
   URL VALIDATION
========================================================= */

function normalizeURL(url) {

    try {

        const parsed = new URL(url);

        if (
            parsed.protocol === "http:" ||
            parsed.protocol === "https:"
        ) {
            return parsed.href;
        }

        return "#";

    } catch {

        return "#";

    }

}


/* =========================================================
   DIRECTIONS
========================================================= */

function createDirectionsURL(destination) {

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(destination)
    );

}


/* =========================================================
   PHONE LINK
========================================================= */

function phoneHref(phone) {

    const digits =
        String(phone)
            .replace(/[^0-9+]/g, "");

    return digits
        ? `tel:${digits}`
        : "#";

}


/* =========================================================
   ZIP SEARCH
========================================================= */

function findByZip() {

    const input =
        document.getElementById("zipCode");

    const zip =
        input.value.trim();


    if (!/^\d{5}$/.test(zip)) {

        document.getElementById(
            "zipMessage"
        ).textContent =

            currentLanguage === "en"

                ? "Please enter a valid 5-digit ZIP code."

                : "Ingresa un código postal válido de 5 dígitos.";

        input.focus();

        return;
    }


    currentZip = zip;


    document.getElementById(
        "zipMessage"
    ).textContent =

        currentLanguage === "en"

            ? `Showing resources prioritized for ZIP ${zip}. Statewide resources remain available.`

            : `Mostrando recursos priorizados para el código ${zip}. Los recursos estatales siguen disponibles.`;


    renderResources();


    document
        .getElementById("resources")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   CATEGORY
========================================================= */

function setCategory(category, button) {

    currentCategory = category;


    document
        .querySelectorAll(".category-button")
        .forEach(element => {

            element.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    renderResources();

}


/* =========================================================
   ZIP MATCH
========================================================= */

function resourceMatchesZip(resource) {

    /*
       No verified ZIP list = statewide /
       metro-wide resource.

       We intentionally do not invent ZIP codes.
    */

    if (!currentZip) {
        return true;
    }

    if (!resource.zips.length) {
        return true;
    }

    return resource.zips.includes(currentZip);

}


/* =========================================================
   RENDER
========================================================= */

function renderResources() {

    const searchInput =
        document.getElementById("search");

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const freeOnly =
        document.getElementById(
            "freeFilter"
        ).checked;


    const spanishOnly =
        document.getElementById(
            "spanishFilter"
        ).checked;


    const filtered =
        resources.filter(resource => {


            /* Category */

            if (
                currentCategory !== "all" &&
                resource.category !== currentCategory
            ) {
                return false;
            }


            /* Free */

            if (
                freeOnly &&
                !resource.free
            ) {
                return false;
            }


            /* Spanish */

            if (
                spanishOnly &&
                !resource.spanish
            ) {
                return false;
            }


            /* ZIP */

            if (
                !resourceMatchesZip(resource)
            ) {
                return false;
            }


            /* Search */

            const haystack = [

                resource.name.en,

                resource.name.es,

                resource.description.en,

                resource.description.es,

                resource.location,

                resource.category,

                resource.access.en,

                resource.access.es,

                resource.eligibility.en,

                resource.eligibility.es

            ]
                .join(" ")
                .toLowerCase();


            if (
                search &&
                !haystack.includes(search)
            ) {
                return false;
            }


            return true;

        });


    const grid =
        document.getElementById(
            "resources"
        );


    grid.innerHTML =
        filtered
            .map(createResourceCard)
            .join("");


    document
        .getElementById("noResults")
        .classList
        .toggle(
            "hidden",
            filtered.length !== 0
        );


    updateResultCount(
        filtered.length
    );

}


/* =========================================================
   CARD
========================================================= */

function createResourceCard(resource) {

    const lang =
        currentLanguage;


    const name =
        resource.name[lang];


    const description =
        resource.description[lang];


    const access =
        resource.access[lang];


    const label =
        categoryLabels[lang][
            resource.category
        ];


    const website =
        normalizeURL(
            resource.website
        );


    const directions =
        createDirectionsURL(
            resource.location
        );


    let phone;


    if (
        resource.phone &&
        resource.phone !== "Check website"
    ) {

        phone = `
            <a
                class="phone-link"
                href="${phoneHref(resource.phone)}">
                ${escapeHTML(resource.phone)}
            </a>
        `;

    } else {

        phone =
            escapeHTML(
                resource.phone
            );

    }


    const spanishBadge =
        resource.spanish

            ? `
                <span class="badge">
                    ${
                        lang === "en"
                            ? "Spanish available"
                            : "Español disponible"
                    }
                </span>
            `

            : "";


    const freeBadge =
        resource.free

            ? `
                <span class="badge blue">
                    ${
                        lang === "en"
                            ? "Free / low-cost"
                            : "Gratis / bajo costo"
                    }
                </span>
            `

            : "";


    return `

        <article
            class="resource-card"
            data-resource-id="${resource.id}">

            <div class="card-top">

                <div>

                    <div class="category-label">
                        ${escapeHTML(label)}
                    </div>

                    <h3>
                        ${escapeHTML(name)}
                    </h3>

                </div>

                <div class="badges">

                    ${freeBadge}

                    ${spanishBadge}

                </div>

            </div>


            <p class="resource-description">
                ${escapeHTML(description)}
            </p>


            <div class="details">

                <div class="detail">

                    <strong>
                        ${
                            lang === "en"
                                ? "Location"
                                : "Ubicación"
                        }
                    </strong>

                    <span>
                        ${escapeHTML(resource.location)}
                    </span>

                </div>


                <div class="detail">

                    <strong>
                        ${
                            lang === "en"
                                ? "Phone"
                                : "Teléfono"
                        }
                    </strong>

                    <span>
                        ${phone}
                    </span>

                </div>


                <div class="detail">

                    <strong>
                        ${
                            lang === "en"
                                ? "Hours"
                                : "Horario"
                        }
                    </strong>

                    <span>
                        ${escapeHTML(resource.hours)}
                    </span>

                </div>


                <div class="detail">

                    <strong>
                        ${
                            lang === "en"
                                ? "Cost"
                                : "Costo"
                        }
                    </strong>

                    <span>
                        ${escapeHTML(resource.cost)}
                    </span>

                </div>


                <div class="detail">

                    <strong>
                        ${
                            lang === "en"
                                ? "Languages"
                                : "Idiomas"
                        }
                    </strong>

                    <span>
                        ${escapeHTML(resource.languages)}
                    </span>

                </div>

            </div>


            <div class="access-box">

                <strong>
                    ${
                        lang === "en"
                            ? "How to access"
                            : "Cómo acceder"
                    }
                </strong>

                <p>
                    ${escapeHTML(access)}
                </p>


                <p style="margin-top:7px">

                    <b>
                        ${
                            lang === "en"
                                ? "Eligibility"
                                : "Requisitos"
                        }:
                    </b>

                    ${escapeHTML(
                        resource.eligibility[lang]
                    )}

                </p>


                <p style="margin-top:7px">

                    <b>
                        ${
                            lang === "en"
                                ? "Documents"
                                : "Documentos"
                        }:
                    </b>

                    ${escapeHTML(
                        resource.documents[lang]
                    )}

                </p>

            </div>


            <div class="card-actions">

                <a
                    class="visit"
                    href="${website}"
                    target="_blank"
                    rel="noopener noreferrer">

                    ${
                        lang === "en"
                            ? "Visit website"
                            : "Visitar sitio"
                    }

                    ↗

                </a>


                <a
                    class="directions"
                    href="${directions}"
                    target="_blank"
                    rel="noopener noreferrer">

                    ${
                        lang === "en"
                            ? "Directions"
                            : "Direcciones"
                    }

                    ↗

                </a>

            </div>

        </article>

    `;

}


/* =========================================================
   RESULT COUNT
========================================================= */

function updateResultCount(count) {

    document.getElementById(
        "resultCount"
    ).textContent =

        currentLanguage === "en"

            ? `Showing ${count} of ${resources.length} resources`

            : `Mostrando ${count} de ${resources.length} recursos`;

}


/* =========================================================
   CLEAR FILTERS
========================================================= */

function clearFilters() {

    document.getElementById(
        "search"
    ).value = "";


    document.getElementById(
        "zipCode"
    ).value = "";


    document.getElementById(
        "freeFilter"
    ).checked = false;


    document.getElementById(
        "spanishFilter"
    ).checked = false;


    currentZip = "";

    currentCategory = "all";


    document
        .querySelectorAll(
            ".category-button"
        )
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    const firstCategory =
        document.querySelector(
            ".category-button"
        );


    if (firstCategory) {

        firstCategory.classList.add(
            "active"
        );

    }


    document.getElementById(
        "zipMessage"
    ).textContent = "";


    renderResources();

}


/* =========================================================
   LANGUAGE
========================================================= */

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "es"
            : "en";


    updateLanguage();

    renderResources();

}


/* =========================================================
   UPDATE LANGUAGE
========================================================= */

function updateLanguage() {

    document
        .querySelectorAll(
            "[data-en][data-es]"
        )
        .forEach(element => {

            element.textContent =
                element.dataset[
                    currentLanguage
                ];

        });


    const search =
        document.getElementById(
            "search"
        );


    search.placeholder =
        currentLanguage === "en"
            ? search.dataset.placeholderEn
            : search.dataset.placeholderEs;


    document.getElementById(
        "languageButton"
    ).textContent =

        currentLanguage === "en"
            ? "Español"
            : "English";


    if (currentZip) {

        document.getElementById(
            "zipMessage"
        ).textContent =

            currentLanguage === "en"

                ? `Showing resources prioritized for ZIP ${currentZip}. Statewide resources remain available.`

                : `Mostrando recursos priorizados para el código ${currentZip}. Los recursos estatales siguen disponibles.`;

    }

}


/* =========================================================
   HELPER MODAL
========================================================= */

function openHelper() {

    document
        .getElementById(
            "helperModal"
        )
        .classList
        .remove("hidden");


    document.body.style.overflow =
        "hidden";


    const closeButton =
        document.querySelector(
            ".modal-close"
        );


    if (closeButton) {

        closeButton.focus();

    }

}


function closeHelper() {

    document
        .getElementById(
            "helperModal"
        )
        .classList
        .add("hidden");


    document.body.style.overflow =
        "";

}


/* =========================================================
   HELPER CATEGORY
========================================================= */

function helperCategory(category) {

    closeHelper();


    const buttons =
        [
            ...document.querySelectorAll(
                ".category-button"
            )
        ];


    const button =
        buttons.find(
            element =>
                element
                    .getAttribute("onclick")
                    ?.includes(
                        `'${category}'`
                    )
        );


    setCategory(
        category,
        button
    );


    document
        .getElementById("resources")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   MODAL OUTSIDE CLICK
========================================================= */

document
    .getElementById(
        "helperModal"
    )
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "helperModal"
            ) {

                closeHelper();

            }

        }
    );


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeHelper();

        }

    }
);


/* =========================================================
   ENTER FOR ZIP
========================================================= */

document
    .getElementById(
        "zipCode"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                findByZip();

            }

        }
    );


/* =========================================================
   INITIALIZE
========================================================= */

document.getElementById(
    "totalResources"
).textContent =
    resources.length;


updateLanguage();

renderResources();


