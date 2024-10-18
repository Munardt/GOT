import { Component } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { ImageType } from 'src/models/enums/image-type';

/** Componente da Header do site */
@Component({
  selector: 'general-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /** Caminho para a imagem principal do componente. */
  public homeImg: string = this.imgSvc.getImage('got', ImageType.SVG);

  /**
   * Construtor do componente `HeaderComponent`.
   *
   * Inicializa os serviços necessários para o funcionamento correto do componente.
   *
   * @param {ImagesService} imgSvc Serviço de busca de imagens, para que ao passar o nome da imagem,
   */
  constructor(private readonly imgSvc: ImagesService) {}
}
