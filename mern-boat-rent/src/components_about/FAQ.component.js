import React, { Component } from 'react';
import "./aboutus.component.css"
import "../components/home.component.css"
import {
    details,
    summary,
    AccordionBody,
} from "@material-tailwind/react";
import { Typography } from '@material-tailwind/react';
export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div class="container mx-auto px-4 rounded-3xl bSty heightTo more backimgFAQ">
                <section class="text-gray-700">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="text-center mb-20">
                            <Typography variant='h1' color='blue' class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
                                Frequently Asked Question
                            </Typography>
                            <Typography variant='h5' color='teal' class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </Typography>
                        </div>
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div class="w-full lg:w-1/2 px-4 py-2">
                                <details class="mb-4">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How do I assist passengers on baggage allowance, special service requests, etc.?
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        If the passenger has questions or requests related to baggage allowance
                                        and special services requests (such as meals, wheelchair, sports equipment etc.)
                                        you need to contact the partner airline directly to enquire about their terms.
                                    </Typography>
                                </details>
                                <details class="mb-4">
                                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                        What are the rules around no-show, refund, rebook, etc.?
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        Each partner airline may have different rules and there is no common policy for all partner airlines. Please ensure that you process these requests in accordance with the fare rules of each airline.
                                    </Typography>
                                </details>
                                <details class="mb-4">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        The supported credit cards (e.g. Visa, Mastercard, UATP and AMEX) vary depending on the BSP market where you are ticketing.
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        You can check the credit cards supported in the market where you are ticketing in the GDS. If your market is not displayed please contact us on w2.service.req@worldticket.net for assistance.
                                    </Typography>
                                </details>
                            </div>
                            <div class="w-full lg:w-1/2 px-4 py-2">
                                <details class="mb-4">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How do I collect fees for rebooking or reissuing?
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        Please use TAX code DU to collect the rebooking fee and alternative CP TAX for selected partners.
                                    </Typography>
                                </details>
                                <details class="mb-4">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Can I add health status information in the free text field of the PNR?
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        No, please do not add any such sensitive information into the free text field of the PNR.
                                        Adding sensitive information in the PNR free text field is not compliant with the European General Data Protection Regulation (GDPR). The free text fields within the PNR are to be used following general data protection principles, in particular, data minimization. Free text fields cannot be used to enter information that may be considered sensitive in nature and therefore require an increased level of security.
                                        No Travel Agents issuing tickets on W2 should add such information in the text fields of the PNR.
                                    </Typography>
                                </details>
                                <details class="mb-4">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Can you confirm an involuntary refund?
                                        Involuntary refunds may be authorized by the airline partner due to medical or personal reasons given by the passenger.
                                    </summary >

                                    <Typography variant='small' className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        Please contact the airline directly. Enter the flight number in the GDS Sub-Hosting look-up module here to get contact information of any of our GDS sub-hosted airlines or check the information for our W2 Ticketing Partner Carriers here. Once the airline authorizes the involuntary refund please submit a Refund Application via BSP link and attach the airline authorization to the Refund Application (For ARC please forward the authorization of the involuntary refund to w2.service.req@worldticket.net)
                                    </Typography>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}