import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {
  // myFunction(){
  //   console.log("function load")
  // }
  dellAvailable(){
      return false
  }
  hpAvailable(){
      return false
  }
  promisVal: any;

  dell = {
    brand : 'Dell',
    HArdDisk: '512GB',
    color: 'Black',
  }
  hp = {
    brand : 'HP',
    HArdDisk: '2 TB',
    color: 'Red',
  }

  notAvilable = {
    brand: 'Not available',
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if(this.dellAvailable()){
         setTimeout(()=>{
          resolve(this.dell)
        }, 3000)
        
      }else if(this.hpAvailable()){
         setTimeout(()=>{
          resolve(this.hp)
        }, 3000)
       
      }else{
        reject(this.notAvilable);
      }

    });
    buyLaptop.then(res=>{
      console.log('then code =>', res);
      this.promisVal =res;
    }).catch(res=>{
      console.log('Catch code =>', res)
      this.promisVal = res;

    })
  }

}
