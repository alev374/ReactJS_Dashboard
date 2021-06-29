import strings from "./localization";

export default {
	id: 'users',
	title: strings.user,
	name: strings.user,
	prefix: 'pers',
	apiId: 'pers_id',
	info: {
		properties: [
		{
			key: 'pers_firstname',
			label: strings.firstName,
			valueKeys: ['pers_firstname'],
			type: 'text'
		},
		{
			key: 'pers_lastname',
			label: strings.surname,
			valueKeys: ['pers_lastname'],
			type: 'text'
		},
		{
			key: 'pers_username',
			label: strings.userName,
			valueKeys: ['pers_username'],
			type: 'text'
		},
		{
			key: 'pers_scope',
			label: strings.scope,
			valueKeys: ['pers_scope'],
			type: 'text',
			translate: true,
		},
		],
		defaultList: ['pers_firstname', 'pers_lastname', 'pers_username', 'pers_scope']
	},
	datasheet: {
		schema: [
		{
			section: {
				key: 'general',
				label: strings.general,
			},
			properties:[
			{
				key: 'pers_firstname',
				label: strings.firstName,
				valueKeys: ['pers_firstname'],
				searchKeys: ['pers_firstname'],
				type: 'search',
				category: 'users'
			},
			{
				key: 'pers_lastname',
				label: strings.surname,
				valueKeys: ['pers_lastname'],
				searchKeys: ['pers_lastname'],
				type: 'search',
				category: 'users'
			},
			{
				key: 'pers_username',
				label: strings.userName,
				valueKeys: ['pers_username'],
				type: 'unique'
			},
			{
				key: 'pers_password',
				label: strings.password,
				valueKeys: ['pers_password'],
				type: 'password',
				optional: true
			},
			{
				key: 'pers_scope',
				label: strings.scope,
				valueKeys: ['pers_scope'],
				values:[
				{
					value: 'admin',
					label: strings.admin
				},
				{
					value: 'manager',
					label: strings.manager
				},
				{
					value: 'inspector',
					label: strings.elevatorAttendant
				},
				{
					value: 'owner',
					label: strings.ownerManager
				},
				{
					value: 'owner_selfmanaged',
					label: strings.ownerSelfManaged,
					additions: [
						{
							key: 'pese_elevator_limit',
							label: strings.elevatorLimit,
							error: strings.limitError,
							placeholder: strings.limitPlaceholder,
							noLimitMessage: strings.limitNoMessage,
							type: 'limits',
							default: true
						},
						{
							key: 'pese_estate_limit',
							label: strings.estatelimit,
							error: strings.limitError,
							placeholder: strings.limitPlaceholder,
							noLimitMessage: strings.limitNoMessage,
							type: 'limits',
							default: true
						},
						{
							key: 'pese_user_limit',
							label: strings.userlimit,
							error: strings.limitError,
							placeholder: strings.limitPlaceholder,
							noLimitMessage: strings.limitNoMessage,
							type: 'limits',
							default: true
						}
					]
				}
				],
				placeholder: strings.chooseRole,
				additionExist: true,
				additionShowValue: 'owner_selfmanaged',
				additionValueKeys: ['pese_elevator_limit', 'pese_estate_limit', 'pese_user_limit'],
				type: 'selectable'
			},
			{
				key: 'pers_is_active',
				label: strings.userStatus,
				valueKeys: ['pers_is_active'],
				type: 'bool',
				description: 'Nutzer aktiv',
				defaultValue: true,
				optional: true
			},
			]
		},
		{
			section: {
				key: 'addresses',
				label: strings.addresses,
			},
			properties:[
			{
				key: 'pers_addresses',
				label: strings.addresses,
				newElementDialogLabel: 'Adresse hinzufügen',
				valueKeys: [
				{
					key: 'address_street_name',
					label: strings.street,
					valueKeys: ['address_street_name'],
					searchKeys: ['pers_addresses.address_street_name'],
					type: 'search',
					category: 'users'
				},
				{
					key: 'address_street_number',
					label: strings.houseNumber,
					valueKeys: ['address_street_number'],
					searchKeys: ['pers_addresses.address_street_number'],
					type: 'search',
					category: 'users'
				},
				{
					key: 'address_zipcode',
					label: strings.postCode,
					valueKeys: ['address_zipcode'],
					searchKeys: ['pers_addresses.address_zipcode'],
					type: 'search',
					category: 'users'
				},
				{
					key: 'address_city',
					label: strings.city,
					valueKeys: ['address_city'],
					searchKeys: ['pers_addresses.address_city'],
					type: 'search',
					category: 'users'
				},
				{
					key: 'address_country',
					label: strings.country,
					valueKeys: ['address_country'],
					searchKeys: ['pers_addresses.address_country'],
					type: 'search',
					category: 'users'
				},
				{
					key: 'address_type',
					label: strings.typeOfAddress,
					valueKeys: ['address_type'],
					values:[
					{
						value: 'home',
						label: strings.private
					},
					{
						value: 'work',
						label: strings.business
					},
					],
					placeholder: strings.pleaseSelect,
					type: 'selectable',
					category: 'users'
				},
				],
				type: 'list',
				listOptional: false
			}
			]
		},
		{
			section: {
				key: 'email_addresses',
				label: strings.emailAddress,
				newElementDialogLabel: strings.addEmailAddress,
			},
			properties:[
			{
				key: 'pers_email_addresses',
				label: strings.emailAddress,
				valueKeys: [
				{
					key: 'email_address',
					label: strings.addres,
					valueKeys: ['email_address'],
					type: 'email'
				},
				{
					key: 'email_type',
					label: strings.typeOfAddress,
					valueKeys: ['email_type'],
					values:[
					{
						value: 'home',
						label: strings.private
					},
					{
						value: 'work',
						label: strings.business
					},
					],
					placeholder: strings.pleaseSelect,
					type: 'selectable',
					category: 'users'
				},
				{
					key: 'email_notification_time',
					label: strings.notificationTime,
					valueKeys: ['email_notification_time'],
					values: [
					{
						value: '0',
						label: '00:00' 
					},
					{
						value: '1',
						label: '01:00' 
					},
					{
						value: '2',
						label: '02:00' 
					},
					{
						value: '3',
						label: '03:00' 
					},
					{
						value: '4',
						label: '04:00' 
					},
					{
						value: '5',
						label: '05:00' 
					},
					{
						value: '6',
						label: '06:00' 
					},
					{
						value: '7',
						label: '07:00' 
					},
					{
						value: '8',
						label: '08:00' 
					},
					{
						value: '9',
						label: '09:00' 
					},
					{
						value: '10',
						label: '10:00' 
					},
					{
						value: '11',
						label: '11:00' 
					},
					{
						value: '12',
						label: '12:00' 
					},
					{
						value: '13',
						label: '13:00' 
					},
					{
						value: '14',
						label: '14:00' 
					},
					{
						value: '15',
						label: '15:00' 
					},
					{
						value: '16',
						label: '16:00' 
					},
					{
						value: '17',
						label: '17:00' 
					},
					{
						value: '18',
						label: '18:00' 
					},
					{
						value: '19',
						label: '19:00' 
					},
					{
						value: '20',
						label: '20:00' 
					},
					{
						value: '21',
						label: '21:00' 
					},
					{
						value: '22',
						label: '22:00' 
					},
					{
						value: '23',
						label: '23:00' 
					}
					],
					placeholder: strings.pleaseChooseTime,
					type: 'selectable'
				}
				],
				type: 'list',
				listOptional: false
			}
			]
		},
		{
			section: {
				key: 'phone_numbers',
				label: strings.phoneNumbers,
				newElementDialogLabel: 'Telefonnummer hinzufügen',
			},
			properties:[
			{
				key: 'pers_phone_numbers',
				label: strings.phoneNumbers,
				valueKeys: [
				{
					key: 'phone_number',
					label: strings.number,
					valueKeys: ['phone_number'],
					type: 'text'
				},
				{
					key: 'phone_type',
					label: strings.typeOfNumber,
					valueKeys: ['phone_type'],
					values:[
					{
						value: 'home',
						label: strings.private
					},
					{
						value: 'work',
						label: strings.business
					},
					{
						value: 'mobile',
						label: strings.mobile
					},
					],
					placeholder: strings.pleaseSelect,
					type: 'selectable',
					category: 'users'
				},
				],
				type: 'list',
				listOptional: false
			}
			]
		}
		]
	}
}