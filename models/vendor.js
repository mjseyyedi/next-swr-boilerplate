import Request from 'endpoints'

export default class VendorModel {

    constructor(vendorCode) {
        this.vendorCode = vendorCode;
        this.vendorInfo = {};
        this.menus = []
    }

    fetcher(){
        return Request.vendorStatic({vendorCode: this.vendorCode})
            .then(response => {
                if(response.status){
                    console.log('%^^^^^^', response.data)
                    this.vendorInfo = response.data.vendor
                    this.menus = response.data.menus
                }
                return response.data
            })
    }

    static get VendorInfo() {
        return this.vendorInfo;
    }


}
