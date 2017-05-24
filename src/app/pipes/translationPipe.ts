import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {
  transform(value: String = ""): String {
    switch(value.toLowerCase()) {
      // gender
      case 'male':
        return 'Homme';
       case 'female':
         return 'Femme';
       case 'n/a':
         return "Ne s'applique pas"
       // hair color
       case 'blond':
         return 'blonds';
       case 'n/a':
         return "Ne s'applique pas";
       case 'none':
         return 'Aucun';
       case 'brown':
         return 'bruns';
       case 'brown, grey':
         return 'bruns, gris';
       case 'auburn, white':
         return 'roux, blancs'
       // skin color
       case 'fair':
       case 'light':
         return 'claire';
       case 'gold':
         return 'dorée';
       case 'white, blue':
         return "blanche, bleue";
       case 'white':
         return 'blanche';
       // eye color
       case 'blue':
         return 'bleue';
       case 'blue-gray':
         return 'bleu-gris';
       case 'yellow':
         return 'jaune';
       case 'red':
         return 'rouge';
       case 'brown':
         return 'marron';
       // species
       case 'human':
         return 'Humain';
       // other
       case 'unknown':
         return 'inconnu';
       default:
         return value;
    }
  }
}

