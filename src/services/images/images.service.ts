import { Injectable } from '@angular/core';
import { ImageType } from 'src/models/enums/image-type';

/** Serviço de busca de imagens, para que ao passar o nome da imagem,
 * o serviço retorne o caminho completo para a imagem.
 */
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  /** Caminho base para buscar as imagens na pasta do projeto */
  private readonly imagePath = '../../assets/images/';

  /**
   * Retorna o caminho para uma imagem no diretório "assets/images/"
   * @param {string} image nome da imagem sem a extensão. Ex.: 'house'
   * @example this.imgService.getImage('house')
   * @returns {string} caminho completo da imagem
   */
  public getImage(image: string, type: ImageType = ImageType.SVG): string {
    return `${this.imagePath}${image}.${type}`;
  }
}
