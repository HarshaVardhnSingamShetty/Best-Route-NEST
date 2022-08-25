import { Injectable } from '@nestjs/common';
import { PancakeswapPair, PancakeswapPairSettings } from 'simple-pancakeswap-sdk';
@Injectable()
export class RoutesService {

    async findOptimumRoutes(from: string, to: string){
        const pancakeswapPair = new PancakeswapPair({
            fromTokenContractAddress: from,
            toTokenContractAddress: to,
            //This is my address, for testing
            ethereumAddress: '0x7368ea4b5A7204CFe592d096D4CdC8832f754027',
            settings: new PancakeswapPairSettings({
              slippage: 0.005,
              deadlineMinutes: 20,
              disableMultihops: false,
            }),
          });
        
        const pancakeswapPairFactory = await pancakeswapPair.createFactory()
        
        const allRoutes = await pancakeswapPairFactory.findBestRoute('1e8')
        console.log(allRoutes);
        return allRoutes.bestRouteQuote.routeText
    }
}
