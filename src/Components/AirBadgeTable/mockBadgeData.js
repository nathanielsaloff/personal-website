// eslint-disable-next-line prefer-const
let mockBadgeData = [
  {
    Name: 'Sherie Crighton',
    Type: 'QVXN',
    ID: 'Z4399',
    'Card Number': '96169',
    Issued: '4/26/2021',
    Expires: '11/13/2021',
    Collected: 'No',
    Status: 'In Use',
    Signatory: 'Jim Jimmer',
    Company: 'Spirit',
    Parking: 'No',
    Driving: 'Section A'
  },
  {
    Name: 'Sal Owtram',
    Type: 'CBPH',
    ID: 'W9304',
    'Card Number': '82146',
    Issued: '4/1/2021',
    Expires: '2/28/2021',
    Collected: 'Yes',
    Status: 'Lost',
    Signatory: 'Jill Jiller',
    Company: 'American Airlines',
    Parking: 'No',
    Driving: 'None'
  },
  {
    Name: 'Devy Gammade',
    Type: 'SHVS',
    ID: 'Y1213',
    'Card Number': '03050',
    Issued: '6/16/2021',
    Expires: '1/24/2021',
    Collected: 'Yes',
    Status: 'In Use',
    Signatory: 'Bob Bobber',
    Company: 'American Airlines',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Brandy Harry',
    Type: 'YILZ',
    ID: 'B9673',
    'Card Number': '00196',
    Issued: '2/24/2021',
    Expires: '10/11/2021',
    Collected: 'Yes',
    Status: 'Expired',
    Signatory: 'Bob Bobber',
    Company: 'Spirit',
    Parking: 'No',
    Driving: 'Section A'
  },
  {
    Name: 'Case Files',
    Type: 'XZCJ',
    ID: 'L1831',
    'Card Number': '37021',
    Issued: '9/28/2021',
    Expires: '6/8/2021',
    Collected: 'No',
    Status: 'In Use',
    Signatory: 'Jill Jiller',
    Company: 'Jet Blue',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Aldous Giraux',
    Type: 'EIIL',
    ID: 'B8537',
    'Card Number': '70350',
    Issued: '1/18/2021',
    Expires: '2/1/2021',
    Collected: 'Yes',
    Status: 'Expired',
    Signatory: 'Jim Jimmer',
    Company: 'Spirit',
    Parking: 'Yes',
    Driving: 'None'
  },
  {
    Name: 'Briano Erni',
    Type: 'SMXF',
    ID: 'J6455',
    'Card Number': '68450',
    Issued: '5/3/2021',
    Expires: '7/14/2021',
    Collected: 'No',
    Status: 'Lost',
    Signatory: 'Bob Bobber',
    Company: 'Delta',
    Parking: 'Yes',
    Driving: 'Section B'
  },
  {
    Name: 'Neilla Boulter',
    Type: 'BXHP',
    ID: 'O8999',
    'Card Number': '91724',
    Issued: '8/8/2021',
    Expires: '1/22/2021',
    Collected: 'Yes',
    Status: 'In Use',
    Signatory: 'Bob Bobber',
    Company: 'Delta',
    Parking: 'No',
    Driving: 'Section B'
  },
  {
    Name: 'Katheryn Dyter',
    Type: 'RKLO',
    ID: 'L2038',
    'Card Number': '99569',
    Issued: '4/23/2021',
    Expires: '4/14/2021',
    Collected: 'Yes',
    Status: 'Lost',
    Signatory: 'Jim Jimmer',
    Company: 'Jet Blue',
    Parking: 'Yes',
    Driving: 'Section B'
  },
  {
    Name: 'Brod Hucknall',
    Type: 'AIIN',
    ID: 'E6697',
    'Card Number': '19192',
    Issued: '12/16/2021',
    Expires: '1/9/2021',
    Collected: 'Yes',
    Status: 'Lost',
    Signatory: 'Bob Bobber',
    Company: 'Spirit',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Ugo Chomiszewski',
    Type: 'MFKZ',
    ID: 'P1558',
    'Card Number': '72654',
    Issued: '4/16/2021',
    Expires: '2/12/2021',
    Collected: 'Yes',
    Status: 'Expired',
    Signatory: 'Jim Jimmer',
    Company: 'Spirit',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Leonardo Fozard',
    Type: 'ZUGY',
    ID: 'Q7097',
    'Card Number': '39677',
    Issued: '11/14/2021',
    Expires: '12/29/2020',
    Collected: 'No',
    Status: 'In Use',
    Signatory: 'Jim Jimmer',
    Company: 'Spirit',
    Parking: 'Yes',
    Driving: 'None'
  },
  {
    Name: 'Dari Toothill',
    Type: 'JYNR',
    ID: 'T5532',
    'Card Number': '93421',
    Issued: '12/23/2021',
    Expires: '1/13/2021',
    Collected: 'Yes',
    Status: 'Lost',
    Signatory: 'Bob Bobber',
    Company: 'Jet Blue',
    Parking: 'No',
    Driving: 'Section A'
  },
  {
    Name: 'Cal Batman',
    Type: 'ETJU',
    ID: 'B7881',
    'Card Number': '23620',
    Issued: '6/28/2021',
    Expires: '2/26/2021',
    Collected: 'Yes',
    Status: 'Expired',
    Signatory: 'Jill Jiller',
    Company: 'Delta',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Brandy Woodroofe',
    Type: 'GNLN',
    ID: 'T0578',
    'Card Number': '45885',
    Issued: '11/18/2021',
    Expires: '4/21/2021',
    Collected: 'No',
    Status: 'In Use',
    Signatory: 'Jim Jimmer',
    Company: 'Jet Blue',
    Parking: 'Yes',
    Driving: 'Section A'
  },
  {
    Name: 'Alejandro Burgess',
    Type: 'TZYW',
    ID: 'M8638',
    'Card Number': '99615',
    Issued: '9/8/2021',
    Expires: '2/20/2021',
    Collected: 'No',
    Status: 'Lost',
    Signatory: 'Jim Jimmer',
    Company: 'Delta',
    Parking: 'No',
    Driving: 'Section B'
  },
  {
    Name: 'Tawnya Pinkerton',
    Type: 'DDSG',
    ID: 'E4483',
    'Card Number': '07839',
    Issued: '9/9/2021',
    Expires: '7/30/2021',
    Collected: 'Yes',
    Status: 'In Use',
    Signatory: 'Jill Jiller',
    Company: 'Jet Blue',
    Parking: 'No',
    Driving: 'Section A'
  },
  {
    Name: 'Tarah Debling',
    Type: 'QGMP',
    ID: 'R9115',
    'Card Number': '89321',
    Issued: '2/25/2021',
    Expires: '1/1/2021',
    Collected: 'Yes',
    Status: 'Lost',
    Signatory: 'Jim Jimmer',
    Company: 'Jet Blue',
    Parking: 'No',
    Driving: 'Section B'
  },
  {
    Name: 'Jon Ellum',
    Type: 'KUEJ',
    ID: 'H3588',
    'Card Number': '39123',
    Issued: '10/31/2021',
    Expires: '6/20/2021',
    Collected: 'Yes',
    Status: 'Expired',
    Signatory: 'Bob Bobber',
    Company: 'Jet Blue',
    Parking: 'No',
    Driving: 'None'
  },
  {
    Name: 'Jasun Cawston',
    Type: 'DXCX',
    ID: 'V5769',
    'Card Number': '44380',
    Issued: '8/24/2021',
    Expires: '12/20/2021',
    Collected: 'No',
    Status: 'In Use',
    Signatory: 'Bob Bobber',
    Company: 'Delta',
    Parking: 'No',
    Driving: 'Section B'
  }
]

export default mockBadgeData
