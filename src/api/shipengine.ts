import ShipEngine from "shipengine";
import type { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.SHIPENGINE_API_KEY) {
  throw new Error("SHIPENGINE_API_KEY is not defined");
}

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY);

// Separate client-side function for making the API call
export const createShipment = async (shipmentDetails: any) => {
  const response = await fetch('/api/shipengine', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shipmentDetails),
  });

  if (!response.ok) {
    throw new Error('Failed to create shipment');
  }

  return response.json();
};

// Rename the API route handler
export const shipmentHandler = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fromAddress, toAddress, packageDetails } = req.body;

      // Rate calculation example
      const rates = await shipengine.getRatesWithShipmentDetails({
        rateOptions: {
          carrierIds: ['se-123890']  // Replace with your carrier ID
        },
        shipment: {
          serviceCode: "usps_priority_mail",
          shipTo: toAddress,
          shipFrom: fromAddress,
          packages: [packageDetails],
        },
      });

      res.status(200).json(rates);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
