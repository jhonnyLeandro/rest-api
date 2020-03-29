const request = require('request'),
url = 'https://api.hunter.io/v2/leads?api_key=db8792f9522a5f10dc01e335e12897a1eecb83a1';

let obj = {
    "email": "dusts@asana.com",
    "first_name": "dusts",
    "last_name": "sands",
    "position": "programmer",
    "company": "asana",
    "company_industry": "Internet",
    "company_size": "20 employees",
    "confidence_score": 95,
    "website": "idonthaveone.com",
    "phone_number": "710-666-6251",
    "twitter": "sand",
    "custom_attributes[custome_id]": "usads"
}

let func = (error, res) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(res.body);
  };

request.post(url,{ json: obj }, func);
