

import { Ph2015Router } from "./physics/2015/2015Router";
import { Ph2010Router } from "./physics/2010/2010Router";
import { Ph2014Router } from "./physics/2014/ph2014Router";
import { Ph2013Router } from "./physics/2013/ph2013Router";
import { Phy2011Router } from "./physics/2011/ph2011Router";
import { Ph2012Router } from "./physics/2012/ph2012Router";

 export const  physicsRouter={

  path:"physics",
  children:[
    Ph2010Router,
    Ph2015Router,
    Ph2014Router,
    Ph2013Router,
    Ph2012Router,
    Phy2011Router,




  ]
}

