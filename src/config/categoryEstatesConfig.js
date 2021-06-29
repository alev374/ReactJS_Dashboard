import strings from "./localization";

export default {
	id: 'estates',
	title: strings.estate,
	name: strings.estate,
	prefix: 'esta',
	apiId: 'esta_id',
	info: {
		properties: [
		{
			key: 'esta_street',
			label: strings.street,
			valueKeys: ['esta_address.address_street_name','esta_address.address_street_number'],
			type: 'text'
		},
		{
			key: 'esta_city',
			label: strings.city,
			valueKeys: ['esta_address.address_zipcode','esta_address.address_city'],
			type: 'text'
		},
		{
			key: 'esta_approach',
			label: strings.approach,
			valueKeys: ['esta_approach'],
			type: 'text'
		},
		{
			key: 'esta_facility_manager_name',
			label: strings.facilityManagerName,
			valueKeys: ['esta_facility_manager.facility_manager_name'],
			type: 'text'
		},
		],
		defaultList: ['esta_street','esta_city','esta_approach','esta_facility_manager_name'] 
	},
	datasheet: {
		schema: [
		{
			section: {
				key: 'esta_address',
				label: strings.address,
			},
			properties:[						
			{
				key: 'address_street_name',
				label: strings.street,
				valueKeys: ['esta_address.address_street_name'],
				searchKeys: ['esta_address.address_street_name'],
				type: 'search',
				category: 'estates'
			},
			{
				key: 'address_street_number',
				label: strings.houseNumber,
				valueKeys: ['esta_address.address_street_number'],
				searchKeys: ['esta_address.address_street_number'],
				type: 'search',
				category: 'estates'
			},
			{
				key: 'esta_approach',
				label: strings.approach,
				valueKeys: ['esta_approach'],
				searchKeys: ['esta_approach'],
				type: 'search',
				category: 'estates',
				optional: true
			},
			{
				key: 'address_zipcode',
				label: strings.postCode,
				valueKeys: ['esta_address.address_zipcode'],
				searchKeys: ['esta_address.address_zipcode'],
				type: 'search',
				category: 'estates'
			},
			{
				key: 'address_city',
				label: strings.city,
				valueKeys: ['esta_address.address_city'],
				searchKeys: ['esta_address.address_city'],
				type: 'search',
				category: 'estates'
			},
			{
				key: 'address_country',
				label: strings.country,
				valueKeys: ['esta_address.address_country'],
				searchKeys: ['esta_address.address_country'],
				type: 'search',
				category: 'estates'
			},
			]
		},
		{
			section: {
				key: 'esta_facility_manager',
				label: strings.facilityManagerName,
			},
			properties:[						
			{
				key: 'facility_manager_name',
				label: strings.facilityManagerName,
				valueKeys: ['esta_facility_manager.facility_manager_name'],
				searchKeys: ['esta_facility_manager.facility_manager_name'],
				type: 'search',
				category: 'estates',
				optional: true
			},
			{
				key: 'facility_manager_phone_number',
				label: strings.phoneNumber,
				valueKeys: ['esta_facility_manager.facility_manager_phone_number'],
				searchKeys: ['esta_facility_manager.facility_manager_phone_number'],
				type: 'search',
				category: 'estates',
				optional: true
			},
			]
		},
		{
			section: {
				key: 'stakeholders',
				label: strings.stakeholders,
			},
			properties:[
			{
				key: 'esta_stakeholders',
				label: strings.ownerManager,
				newElementDialogLabel: strings.addOwnerManager,
				valueKeys: [
				{
					key: 'pers_id',
					apiId: 'pers_id',
					apiCategory: 'users',
					label: strings.ownerManager,
					valueKeys: ['pers_firstname', 'pers_lastname'],
					searchKeys: ['pers_firstname', 'pers_lastname', 'pers_username'],
					type: 'reference',
					category: 'users',
					optionValues: ['pers_firstname', 'pers_lastname'],
					optionLableValues: ['pers_username', 'pers_scope']
				}
				// { //Only when owner_selfmanaged user is logged in.
				// 	key: 'pers_id',
				// 	label: strings.ownerManager,
				// 	valueKeys: ['pers_firstname', 'pers_lastname'],
				// 	type: 'unique'
				// }
				],
				type: 'list',
				optional: true,
				secondOption: {
					key: 'esta_stakeholders',
					label: strings.ownerManager,
					valueKeys: ['pers_firstname', 'pers_lastname'],
					type: 'none'
				}
			}
			]
		},
		{
			section: {
				key: 'reports',
				label: strings.reports,
			},
			properties:[
			{
				key: 'esta_reports',
				label: strings.date,
				valueKeys: [
				{
					key: 'repo_creation',
					apiId: 'repo_creation',
					label: strings.date,
					valueKeys: ['repo_creation'],
					searchKeys: ['repo_creation'],
					type: 'timestamp',
					category: 'reports'
				},
				{
					key: 'repo_elevator',
					apiId: 'repo_elevator',
					label: strings.serialNumber,
					valueKeys: ['repo_elevator.elev_serial_number'],
					searchKeys: ['repo_elevator.elev_serial_number'],
					type: 'text',
					category: 'reports'
				},
				],
				searchKeys: ['esta_reports'],
				type: 'report',
				category: 'reports',
				optional: true,
			}
			]
		},
		]
	}
}