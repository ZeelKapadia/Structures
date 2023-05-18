import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GetProduct } from "../action/product.action";
import { product } from "../Enum/product";
import { HttpcallsService } from "src/app/service-calling/httpcalls.service";
import { tap } from "rxjs/operators";


// State
export class ProductStateModel {
    products: product[];
    productsLoaded: boolean
}

@State({
    name: 'Products',
    defaults: {
        products: [],
        productsLoaded: false
    }
})

@Injectable()
export class ProductState {

    constructor(private httpServivce: HttpcallsService) { }

    // getList
    @Selector()
    static getProductList(state: ProductStateModel) {
        return state.products
    }
    @Selector()
    static getProductListLoaded(state: ProductStateModel) {
        return state.productsLoaded
    }

    @Action(GetProduct) getProductList({ getState, setState }: StateContext<ProductStateModel>) {
        return this.httpServivce.listAll().pipe(tap(resp => {
            const state = getState();
            setState({
                ...state,
                products: resp[0],
                productsLoaded: true
            })

        }))
    }
}