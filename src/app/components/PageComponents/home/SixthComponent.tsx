'use client'

import React, { useState } from 'react';

interface ResidenceInfo {
  name: string;
  bedrooms: string | number;
  bathrooms: number;
  powderRooms?: number;
  interior: string;
  exterior: string;
  total: string;
  floorPlanImage: string;
}

const residences: Record<string, ResidenceInfo> = {
  "residence-a": {
    name: "Recidence A Line 01",
    bedrooms: 2,
    bathrooms: 2,
    interior: "1,081 SF | 100m²",
    exterior: "199 SF | 18m²",
    total: "1,280 SF | 119m²",
    floorPlanImage: "/Recidence-D-line-04.png"
  },
  "residence-b": {
    name: "Recidence B Line 02",
    bedrooms: 1,
    bathrooms: 2,
    interior: "799 SF | 74m²",
    exterior: "182 SF | 17m²",
    total: "981 SF | 91m²",
    floorPlanImage: "/recidence-b-line-2.png"
  },
  "residence-c": {
    name: "Recidence C Line 03",
    bedrooms: 1,
    bathrooms: 2,
    interior: "791 SF | 73m²",
    exterior: "221 SF | 21m²",
    total: "1,012 SF | 94m²",
    floorPlanImage: "/Recidence-C-line-03.png"
  },
  "residence-d": {
    name: "Recidence D Line 04",
    bedrooms: 1,
    bathrooms: 2,
    interior: "817 SF | 76m²",
    exterior: "219 SF | 20m²",
    total: "1,036 SF | 96m²",
    floorPlanImage: "/Recidence-D-line-04.png"
  },
  "residence-e": {
    name: "Recidence E Line 05",
    bedrooms: 2,
    bathrooms: 2,
    interior: "1,035 SF | 96m²",
    exterior: "290 SF | 27m²",
    total: "1,352 SF | 123m²",
    floorPlanImage: "/Recidence-E-line-05.png"
  },
  "residence-f": {
    name: "Recidence F Line 06",
    bedrooms: 2,
    bathrooms: 2,
    interior: "1,109 SF | 103m²",
    exterior: "302 SF | 28m²",
    total: "1,411 SF | 131m²",
    floorPlanImage: "/Recidence-F-line-06.png"
  },
  "residence-g": {
    name: "Recidence G Line 07",
    bedrooms: 1,
    bathrooms: 1,
    interior: "670 SF | 62m²",
    exterior: "100 SF | 9m²",
    total: "770 SF | 72m²",
    floorPlanImage: "/Residence-G-line-07.png"
  },
  "residence-h": {
    name: "Recidence H Line 08",
    bedrooms: "Studio",
    bathrooms: 1,
    interior: "510 SF | 47m²",
    exterior: "146 SF | 14m²",
    total: "656 SF | 61m²",
    floorPlanImage: "/Recidence-H-line-08.png"
  },
  "residence-j": {
    name: "Recidence J Line 09",
    bedrooms: "Studio",
    bathrooms: 1,
    interior: "507 SF | 47m²",
    exterior: "170 SF | 16m²",
    total: "677 SF | 63m²",
    floorPlanImage: "/Recidence-J-line-09.png"
  },
  "residence-k": {
    name: "Recidence K Line 10",
    bedrooms: "Studio",
    bathrooms: 1,
    interior: "507 SF | 47m²",
    exterior: "170 SF | 16m²",
    total: "677 SF | 63m²",
    floorPlanImage: "/Recidence-k-line-10.png"
  },
  "residence-l": {
    name: "Recidence L Line 11",
    bedrooms: "Studio",
    bathrooms: 1,
    interior: "510 SF | 47m²",
    exterior: "147 SF | 14m²",
    total: "657 SF | 61m²",
    floorPlanImage: "/Recidence-L-line-11.png"
  },
  "residence-m": {
    name: "Recidence M Line 12",
    bedrooms: 2,
    bathrooms: 2,
    interior: "1,011 SF | 94m²",
    exterior: "294 SF | 27m²",
    total: "1,305 SF | 121m²",
    floorPlanImage: "/Recidence-M-line-12.png"
  },
  "residence-n": {
    name: "Recidence N Line 01",
    bedrooms: "4 + DEN",
    bathrooms: 4.5,
    interior: "2,237 SF | 208m²",
    exterior: "582 SF | 54m²",
    total: "2,819 SF | 262m²",
    floorPlanImage: "/Recidence-N-line-01.png"
  },
  "residence-p": {
    name: "Recidence P Line 02",
    bedrooms: "2 + DEN",
    bathrooms: 3,
    interior: "1,450 SF | 135m²",
    exterior: "399 SF | 37m²",
    total: "1,849 SF | 172m²",
    floorPlanImage: "/Recidence-P-line-02.png"
  },
  "residence-q": {
    name: "Recidence Q Line 03",
    bedrooms: "3 + Primary Library",
    bathrooms: 3,
    interior: "1,825 SF | 170m²",
    exterior: "472 SF | 44m²",
    total: "2,297 SF | 213m²",
    floorPlanImage: "/Recidence-Q-Line-03.png"
  },
  "residence-r": {
    name: "Recidence R Line 04",
    bedrooms: 4,
    bathrooms: 4.5,
    interior: "1,974 SF | 183m²",
    exterior: "514 SF | 48m²",
    total: "2,488 SF | 231m²",
    floorPlanImage: "/Recidence-R-line-04.png"
  },
  "residence-s": {
    name: "Residence S line 05",
    bedrooms: 2,
    bathrooms: 2,
    interior: "1,050 SF | 98m²",
    exterior: "343 SF | 32m²",
    total: "1,393 SF | 129m²",
    floorPlanImage: "/Recidence-S-line-05.png"
  },
  "residence-t": {
    name: "Recidence T Line 06",
    bedrooms: 2,
    bathrooms: 2,
    powderRooms: 1,
    interior: "1,084 SF | 101m²",
    exterior: "344 SF | 32m²",
    total: "1,428 SF | 133m²",
    floorPlanImage: "/Recidence-T-line-06.png"
  }
};

const residenceSection = {
  title: "Floor plans",
  subtitle: "Full Floor residences",
  plans: residences
};

function PlanDetails({ details}: { details: ResidenceInfo; activePlan: string }) {
  if (!details) {
    return <div>No information available for this residence.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div className="bg-white shadow-lg p-6">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bedrooms</span>
              <span className="text-xl font-semibold">{details.bedrooms}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-2xl">Bathrooms</span>
              <span className="text-xl font-semibold">{details.bathrooms}</span>
            </li>
            {details.powderRooms && (
              <li className="flex justify-between items-center">
                <span className="text-2xl">Powder Room</span>
                <span className="text-xl font-semibold">{details.powderRooms}</span>
              </li>
            )}
            <li className="py-1">
              <span className="text-2xl">Interior {details.interior}</span>
            </li>
            <li className="py-1">
              <span className="text-2xl">Exterior {details.exterior}</span>
            </li>
            <li className="py-1">
              <span className="text-2xl">Total {details.total}</span>
            </li>
          </ul>
          <button className="font-neue-plak-black uppercase text-lg w-full mt-6 px-6 py-3 bg-black border-2 border-black text-white hover:bg-white hover:text-black transition-colors duration-300">
            Schedule a visit
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <img
          src={details.floorPlanImage}
          alt={`Floor Plan for ${details.name}`}
          className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}

function PlanSection({ section, id }: { section: any; id: string }) {
  const [activePlan, setActivePlan] = useState<string>(Object.keys(section.plans)[0]);

  return (
    <div id={id} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold text-gray-800 mb-2">{section.title}</h2>
        <p className="text-3xl text-gray-600">{section.subtitle}</p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(section.plans).map((planKey) => (
            <button
              key={planKey}
              onClick={() => setActivePlan(planKey)}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
                activePlan === planKey
                  ? 'bg-black text-lg font-neue-plak-blackborder text-white font-neue-plak-black'
                  : 'bg-white text-2xl border border-black text-black hover:bg-gray-200'
              }`}
            >
              {section.plans[planKey].name}
            </button>
          ))}
        </div>
      </div>

      <PlanDetails details={section.plans[activePlan]} activePlan={activePlan} />
    </div>
  );
}

function SixthComponent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlanSection section={residenceSection} id="villapiano" />
      </div>
    </div>
  );
}

export default SixthComponent;
