import strings from "./localization";

export default {
	id: 'reports',
	title: strings.reports,
	name: strings.report,
	prefix: 'repo',
	apiId: 'repo_id',
	info: {
		properties: [
		{
			key: 'repo_creation',
			label: strings.date,
			valueKeys: ['repo_creation'],
			type: 'timestamp'
		},
		{
			key: 'repo_inspector',
			label: strings.elevatorAttendant,
			valueKeys: ['repo_inspector.pers_lastname', 'repo_inspector.pers_firstname'],
			type: 'text'
		},
		{
			key: 'repo_elevator_serial_number',
			label: strings.serialNumber,
			valueKeys: ['repo_elevator.elev_serial_number'],
			type: 'text'
		},
		{
			key: 'repo_elevator_barcode',
			label: strings.barcode,
			valueKeys: ['repo_elevator.elev_barcode'],
			type: 'text'
		},
		{
			key: 'repo_estate_street',
			label: strings.street,
			valueKeys: ['repo_estate.esta_address.address_street_name', 'repo_estate.esta_address.address_street_number'],
			type: 'text'
		},
		{
			key: 'repo_estate_city',
			label: strings.city,
			valueKeys: ['repo_estate.esta_address.address_zipcode', 'repo_estate.esta_address.address_city'],
			type: 'text'
		},
		],
		defaultList: ['repo_creation','repo_inspector','repo_elevator_serial_number','repo_elevator_barcode','repo_estate_street','repo_estate_city'] 
	},
	datasheet: {

	}
}