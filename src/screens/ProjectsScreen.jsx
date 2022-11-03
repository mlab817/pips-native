import React from "react";
import {
	Box, Button,
	Center,
	Circle,
	Heading,
	HStack,
	Icon,
	IconButton, Image,
	Input,
	Pressable,
	ScrollView,
	Text,
	VStack
} from "native-base";
import {Colors} from "../constants/colors";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {SwipeListView} from "react-native-swipe-list-view";
import moment from "moment";

const projects = [
	{
		"key": "9659eeef",
		"uuid": "9659eeef",
		"title": "Nobis et deleniti voluptas",
		"office": {
			"name": "Project Development Service",
			"acronym": "PDS",
			"color": "#8B8000",
			"projects_count": 2,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 153,
			"avatar": "FF",
			"color": "#8B8000",
			"fullname": "Fernando Flores",
			"username": "pds_01",
			"email": "fernando.flores@da.gov.ph\npds@da.gov.ph",
			"office": "PDS",
			"contact_number": "8920-0928",
			"last_login_at": "2022-11-02 08:46:09"
		},
		"issues": 7,
		"comments": 0,
		"pips_status": {
			"color": "orange",
			"name": "DROPPED BY IPD"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "NEDA:VALIDATED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 13,
				"avatar": "JF",
				"color": "#366658",
				"fullname": "Jerech Flauta",
				"username": "ipd_08",
				"email": "jechflauta@gmail.com",
				"office": "IPD",
				"contact_number": "2306",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T03:38:09.000000Z"
	},
	{
		"key": "8cd4aa8c",
		"uuid": "8cd4aa8c",
		"title": "Nobis doloribus voluptatibus asperiores et ullam voluptatibus.",
		"office": {
			"name": "National Irrigation Administration",
			"acronym": "NIA",
			"color": "#5C4033",
			"projects_count": 7,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 31,
			"avatar": "RD",
			"color": "#5C4033",
			"fullname": "Rogelia dela Torre",
			"username": "nia_03",
			"email": "cps@nia.gov.ph",
			"office": "NIA",
			"contact_number": "(02)8926-5896",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "green",
			"name": "FINALIZED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "red",
			"name": "NEDA:DROPPED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 6,
				"avatar": "MT",
				"color": "#366658",
				"fullname": "Maricar Tayco",
				"username": "ipd_01",
				"email": "ricca.tayco@gmail.com",
				"office": "IPD",
				"contact_number": "2306",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "052858a2",
		"uuid": "052858a2",
		"title": "Vitae dolores cum harum dignissimos totam distinctio sed qui.",
		"office": {
			"name": "Agricultural Training Institute",
			"acronym": "ATI",
			"color": "#AA336A",
			"projects_count": 4,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 85,
			"avatar": "RM",
			"color": "#AA336A",
			"fullname": "Rosana Mula",
			"username": "ati_01",
			"email": "rpmula@ati.da.gov.ph",
			"office": "ATI",
			"contact_number": "8929-8541\n220/221",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "red",
			"name": "DROPPED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "blue",
			"name": "IPD:DRAFT"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 12,
				"avatar": "AC",
				"color": "#366658",
				"fullname": "Angel Mae Conda",
				"username": "ipd_07",
				"email": "angelmaeconda@gmail.com",
				"office": "IPD",
				"contact_number": "2372",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "86ag0g62",
		"uuid": "86ag0g62",
		"title": "Qui repudiandae ab assumenda voluptas praesentium optio alias.",
		"office": {
			"name": "National Dairy Authority",
			"acronym": "NDA",
			"color": "#023020",
			"projects_count": 5,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 59,
			"avatar": "SS",
			"color": "#023020",
			"fullname": "Shayne Sumagaysay",
			"username": "nda_03",
			"email": "sbsumagaysay@nda.da.gov.ph",
			"office": "NDA",
			"contact_number": "(02)8926-0733 to 35  Local 3006",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "orange",
			"name": "DROPPED BY IPD"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "PC:CONFIRMED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 9,
				"avatar": "JA",
				"color": "#366658",
				"fullname": "Jamie Milleth Angeles",
				"username": "ipd_04",
				"email": "jamieangeles.ipd@gmail.com",
				"office": "IPD",
				"contact_number": "2324",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "1ca8c690",
		"uuid": "1ca8c690",
		"title": "Velit quisquam voluptatem repellat provident fugiat dolore corporis.",
		"office": {
			"name": "RFO - Zamboanga Peninsula",
			"acronym": "DA-RFO 9",
			"color": "#023020",
			"projects_count": 1,
			"users_count": 3
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 211,
			"avatar": "RC",
			"color": "#023020",
			"fullname": "Rad Donn Cedeño",
			"username": "rfo_ix_01",
			"email": "directorda9@fmail.com\nrfo9@mail.da.gov.ph",
			"office": "DA-RFO 9",
			"contact_number": "63(62)214-4677\n215-4069",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "orange",
			"name": "DROPPED BY IPD"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "PC:CONFIRMED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 11,
				"avatar": "RP",
				"color": "#366658",
				"fullname": "Rhoe Polloso",
				"username": "ipd_06",
				"email": "ropolloso.pms.ipd@gmail.com",
				"office": "IPD",
				"contact_number": "2323",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "cf18584c",
		"uuid": "cf18584c",
		"title": "Vel ut modi aliquid nam quia.",
		"office": {
			"name": "Agricultural Credit Policy Council",
			"acronym": "ACPC",
			"color": "#023020",
			"projects_count": 4,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 17,
			"avatar": "JS",
			"color": "#023020",
			"fullname": "Jan Morihei Sevilla",
			"username": "acpc_04",
			"email": "jmsevilla@acpc.gov.ph",
			"office": "ACPC",
			"contact_number": "(02)8634-3322",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "red",
			"name": "DROPPED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "red",
			"name": "IPD:DROPPED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 11,
				"avatar": "RP",
				"color": "#366658",
				"fullname": "Rhoe Polloso",
				"username": "ipd_06",
				"email": "ropolloso.pms.ipd@gmail.com",
				"office": "IPD",
				"contact_number": "2323",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "dce62700",
		"uuid": "dce62700",
		"title": "Accusantium sit autem eum rerum accusamus sit sed voluptas.",
		"office": {
			"name": "FOS-SPCMAD (for FAPs and LFPs)",
			"acronym": "SPCMAD",
			"color": "#8B4000",
			"projects_count": 3,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 148,
			"avatar": "BG",
			"color": "#8B4000",
			"fullname": "Byron Gadaiano",
			"username": "spcmad_04",
			"email": "byrongadiano25@gmail.com",
			"office": "SPCMAD",
			"contact_number": "8920-1767\nLoc 2412",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "green",
			"name": "FINALIZED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "NEDA:VALIDATED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 13,
				"avatar": "JF",
				"color": "#366658",
				"fullname": "Jerech Flauta",
				"username": "ipd_08",
				"email": "jechflauta@gmail.com",
				"office": "IPD",
				"contact_number": "2306",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "g7509bb4",
		"uuid": "g7509bb4",
		"title": "Consequatur libero quia est ut assumenda.",
		"office": {
			"name": "RFO - Western Visayas",
			"acronym": "DA-RFO 6",
			"color": "#00008B",
			"projects_count": 5,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 202,
			"avatar": "KA",
			"color": "#00008B",
			"fullname": "Kelzie Reniette Aquino",
			"username": "rfo_vi_04",
			"email": "pps.3only@gmail.com",
			"office": "DA-RFO 6",
			"contact_number": "9092917287",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "red",
			"name": "DROPPED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "NEDA:VALIDATED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 10,
				"avatar": "AE",
				"color": "#366658",
				"fullname": "Alexander II Estoesta",
				"username": "ipd_05",
				"email": "alex.estoesta@gmail.com",
				"office": "IPD",
				"contact_number": "2371",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "d120aa40",
		"uuid": "d120aa40",
		"title": "Pariatur dolor et itaque cum incidunt nemo fugit.",
		"office": {
			"name": "National Organic Agriculture Program",
			"acronym": "ORGANIC",
			"color": "#8B8000",
			"projects_count": 1,
			"users_count": 3
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 123,
			"avatar": "AL",
			"color": "#8B8000",
			"fullname": "Anne Glyn Lisbo",
			"username": "organic_02",
			"email": "anne.lisbo@da.gov.ph",
			"office": "ORGANIC",
			"contact_number": "9173049641",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "green",
			"name": "FINALIZED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "gold",
			"name": "NEDA:VALIDATED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 8,
				"avatar": "KE",
				"color": "#366658",
				"fullname": "Kristine Eusebio",
				"username": "ipd_03",
				"email": "tine.eusebio@gmail.com",
				"office": "IPD",
				"contact_number": "2324",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	},
	{
		"key": "bgf438a1",
		"uuid": "bgf438a1",
		"title": "Provident eius culpa laboriosam a modi quo illum.",
		"office": {
			"name": "RFO - CALABARZON",
			"acronym": "DA-RFO 4A",
			"color": "#8B8000",
			"projects_count": 7,
			"users_count": 4
		},
		"permissions": {
			"view": false,
			"update": false,
			"delete": false,
			"lock": false,
			"unlock": false,
			"validate": false,
			"drop": false,
			"updatePipol": false
		},
		"user": {
			"id": 190,
			"avatar": "RD",
			"color": "#8B8000",
			"fullname": "Regine Ann Dinayco",
			"username": "rfo_iva_04",
			"email": "regineann.ferma@calabarzon.da.gov.ph",
			"office": "DA-RFO 4A",
			"contact_number": "(02) 8273-2472\nlocal 4478",
			"last_login_at": null
		},
		"issues": 0,
		"comments": 0,
		"pips_status": {
			"color": "green",
			"name": "FINALIZED"
		},
		"passes_validation": 0,
		"pipol_status": {
			"color": "green",
			"name": "IPD:ENDORSED"
		},
		"reviewers": [
			{
				"id": 5,
				"avatar": "JM",
				"color": "#366658",
				"fullname": "Joseph Manicad",
				"username": "ipd_chief",
				"email": "manicad3480@gmail.com",
				"office": "IPD",
				"contact_number": "2304",
				"last_login_at": null
			},
			{
				"id": 11,
				"avatar": "RP",
				"color": "#366658",
				"fullname": "Rhoe Polloso",
				"username": "ipd_06",
				"email": "ropolloso.pms.ipd@gmail.com",
				"office": "IPD",
				"contact_number": "2323",
				"last_login_at": null
			}
		],
		"is_locked": false,
		"updated_at": "2022-10-28T00:36:21.000000Z"
	}
]

const Swiper = () => (
	<SwipeListView
		rightOpenValue={-75}
		previewRowKey='0'
		previewOpenValue={-60}
		previewOpenDelay={1000}
		disableRightSwipe
		data={projects}
		renderHiddenItem={renderHiddenItem}
		renderItem={renderItem}
		showsVerticalScrollIndicator={false}
	/>
)

const renderItem = (data, rowMap) => (
	<Pressable>
		<Box mb={3}>
			<HStack
				alignItems='center'
				bg={Colors.white}
				shadow={1}
				rounded={10}
				h={24}
				overflow='hidden'>
				<Center w='20%' color={Colors.deepGray}>
					{
						data.item.office?.acronym
					}
				</Center>
				<VStack w='75%' px={2}>
					<Text
						isTruncated
						color={Colors.black}
						semibold
						fontSize={14}
						noOfLines={2}>
						{data.item.title}
					</Text>
					<Text fontSize={10}>
						{moment(data.item.updated_at).format('MM/DD/YY HH:MM')}
					</Text>
				</VStack>
			</HStack>
		</Box>
	</Pressable>
)

const renderHiddenItem = (data) => (
	<Pressable
		w={75}
		roundedTopRight={10}
		roundedBottomRight={10}
		h='88%'
		ml='auto'
		justifyContent='center'
		bg={Colors.red}
	>
		<Center alignItems='center' space={5}>
			<MaterialIcons
				name='delete'
				size={24}
				color={Colors.white}
			/>
		</Center>
	</Pressable>
)

export default function ProjectsScreen() {
	return (
		<Box flex={1} safeArea>
			<Box bg={Colors.secondary} p={2}>
				<Heading color={Colors.white} shadow={2}>Projects</Heading>
				
				<HStack space={3} my={3} alignItems='center' justifyContent='space-between'>
					<Input
						w='85%'
						rounded={5}
						h={10}
						placeholder='Search...'
						InputLeftElement={<Icon as={<MaterialIcons name='search' size={5} />} ml='2' />}
						autoCapitalize={false}
						_focus={{
							bg: Colors.white,
							borderColor: Colors.white
						}}
						color={Colors.white}
						bg={Colors.white}
					/>
					<IconButton size={10} variant='outline' _icon={{
						as: MaterialCommunityIcons,
						name: 'sort-alphabetical-ascending-variant',
						color: Colors.white,
						size: 6
					}} borderColor={Colors.white} _pressed={{
						bg: Colors.white,
						borderColor: Colors.white
					}} _pressed={{
						bg: Colors.secondary
					}} />
				</HStack>
			</Box>
			
			<Box px={2} pt={3} pb={120}>
				<Swiper />
			</Box>
		</Box>
	)
}