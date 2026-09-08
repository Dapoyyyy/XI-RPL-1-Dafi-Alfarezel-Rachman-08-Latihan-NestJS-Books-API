import { Injectable } from '@nestjs/common';
import { CircleDTO } from './DTO/circle.dto.js';

@Injectable()
export class GeometryService {
    countCircleArea(circleDTo: CircleDTO){
        const area = Math.PI * circleDTo.radius * circleDTo.radius
         return {
            message : `Area of circle has counted`,
            data: area
         }

    }
}
