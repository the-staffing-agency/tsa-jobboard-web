'use client'

import Script from 'next/script'

const LINKEDIN_PARTNER_ID = '8824826'

export function LinkedInInsight() {
	return (
		<>
			<Script id="linkedin-partner-id" strategy="afterInteractive">
				{`
					_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
					window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
					window._linkedin_data_partner_ids.push(_linkedin_partner_id);
				`}
			</Script>
			<Script
				id="linkedin-insight"
				strategy="afterInteractive"
				src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
			/>
		</>
	)
}
