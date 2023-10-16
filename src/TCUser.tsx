import { TCCoreBridge } from "./TCCore";

export class TCUser
{
    private static instance: TCUser;
    private additionalProperties = new Map();

    private _ID: string;
    private _email: string;
    private _email_md5: string;
    private _email_sha256: string;
    private _consentID: string;
    private _phoneNumber: string;
    private _firstName: string;
    private _lastName: string;
    private _gender: string;
    private _birthdate: string;
    private _city: string;
    private _state: string;
    private _zipcode: string;
    private _country: string;
    private _anonymous_id: string;
    private _consent_categories = new Map();
    private _external_consent = new Map();
    private _consent_vendors = new Map();


    private constructor() { }

    public static getInstance(): TCUser 
    {
        if (!TCUser.instance) 
        {
            TCUser.instance = new TCUser();
        }

        return TCUser.instance;
    }

    public set ID(val: string) 
    {
        this._ID = val;
        TCCoreBridge.setStringValue("ID", val, TCUser.name);
    }

    public set email(val: string) 
    {
        this._email = val;
        TCCoreBridge.setStringValue("email", val, TCUser.name);        
    }

    public set email_md5(val: string) 
    {
        this._email_md5 = val;
        TCCoreBridge.setStringValue("email_md5", val, TCUser.name);        
    }

    public set email_sha256(val: string) 
    {
        this._email_sha256 = val;
        TCCoreBridge.setStringValue("email_sha256", val, TCUser.name);        
    }

    public set consentID(val: string) 
    {
        this._consentID = val;
        TCCoreBridge.setStringValue("consentID", val, TCUser.name);        
    }

    public set phoneNumber(val: string) 
    {
        this._phoneNumber = val;
        TCCoreBridge.setStringValue("phoneNumber", val, TCUser.name);        
    }

    public set firstName(val: string) 
    {
        this._firstName = val;
        TCCoreBridge.setStringValue("firstName", val, TCUser.name);        
    }

    public set lastName(val: string) 
    {
        this._lastName = val;
        TCCoreBridge.setStringValue("lastName", val, TCUser.name);        
    }

    public set gender(val: string) 
    {
        this._gender = val;
        TCCoreBridge.setStringValue("gender", val, TCUser.name);        
    }

    public set birthdate(val: string) 
    {
        this._birthdate = val;
        TCCoreBridge.setStringValue("birthdate", val, TCUser.name);        
    }

    public set city(val: string) 
    {
        this._city = val;
        TCCoreBridge.setStringValue("city", val, TCUser.name);        
    }

    public set state(val: string) 
    {
        this._state = val;
        TCCoreBridge.setStringValue("state", val, TCUser.name);        
    }

    public set zipcode(val: string) 
    {
        this._zipcode = val;
        TCCoreBridge.setStringValue("zipcode", val, TCUser.name);        
    }

    public set country(val: string) 
    {
        this._country = val;
        TCCoreBridge.setStringValue("country", val, TCUser.name);        
    }

    public set anonymous_id(val: string) 
    {
        this._anonymous_id = val;
        TCCoreBridge.setStringValue("anonymous_id", val, TCUser.name);        
    }

    public set consent_categories(val: Object) 
    {
       // this._consent_categories = val;
      //  TCCoreBridge.setNumValue("consent_categories", val, TCUser.name);        
    }

    public set external_consent(val: Object) 
    {
      //  this._external_consent = val;
       // TCCoreBridge.setNumValue("external_consent", val, TCUser.name);        
    }

    public set consent_vendors(val: Object) 
    {
     //   this._consent_vendors = val;
    //    TCCoreBridge.setNumValue("consent_vendors", val, TCUser.name);        
    }

    public get ID() 
    {
        return this._ID;
    }

    public get email() 
    {
        return this._email;
    }

    public get email_md5() 
    {
        return this._email_md5;
    }

    public get email_sha256() 
    {
        return this._email_sha256;
    }

    public get consentID() 
    {
        return this._consentID;
    }

    public get phoneNumber() 
    {
        return this._phoneNumber;
    }

    public get firstName() 
    {
        return this._firstName;
    }

    public get lastName() 
    {
        return this._lastName;
    }

    public get gender() 
    {
        return this._gender;
    }
    
    public get birthdate() 
    {
        return this._birthdate;
    }

    public get city() 
    {
        return this._city;
    }

    public get state() 
    {
        return this._state;
    }

    public get zipcode() 
    {
        return this._zipcode;
    }

    public get country() 
    {
        return this._country;
    }

    public get anonymous_id() 
    {
        return this._anonymous_id;
    }

    public get consent_categories() 
    {
        return this._consent_categories;
    }

    public get external_consent() 
    {
        return this._external_consent;
    }
    
    public get consent_vendors() 
    {
        return this._consent_vendors;
    }

    initValues(properties: any) 
    {
       this._ID = properties["ID"] as string
       this._email = properties["email"] as string;
       this._email_md5 = properties["email_md5"] as string;
       this._email_sha256 = properties["email_sha256"] as string;
       this._consentID = properties["consentID"] as string;
       this._phoneNumber = properties["phoneNumber"] as string;
       this._firstName = properties["firstName"] as string;
       this._lastName = properties["lastName"] as string;
       this._gender = properties["gender"] as string;
       this._birthdate = properties["birthdate"] as string;
       this._city = properties["city"] as string;
       this._state = properties["state"] as string;
       this._zipcode = properties["zipcode"] as string;
       this._country = properties["country"] as string;
       this._anonymous_id = properties["consistent_anonymous_id"] as string;
    }

    addAdditionalProperty(key: string, value: string)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalProperty(key, value, TCUser.name);
    }
  
    addAdditionalPropertyWithMapValue(key: string, value: Object)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithMapValue(key, value, TCUser.name);
    }
  
    addAdditionalPropertyWithBooleanValue(key: string, value: boolean)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithBooleanValue(key, value, TCUser.name);
    }
  
    addAdditionalPropertyWithNumberValue(key: string, value: number)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithNumberValue(key, value, TCUser.name);
    }

    addAdditionalPropertyWithArrayValue(key: string, value: Array<any>)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithArrayValue(key, value, TCUser.name);
    }
  
    getAdditionalProperties(): Map<string, any>
    {
      return this.additionalProperties;
    }
  
    removeAdditionalProperty(key: string)
    {
        this.additionalProperties.delete(key);
        TCCoreBridge.removeAdditionalProperty(key, TCUser.name);
    }
  
    clearAdditionalProperties()
    {
        this.additionalProperties.clear();
        TCCoreBridge.clearAdditionalProperties(TCUser.name)
    }
}