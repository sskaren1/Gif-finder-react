import { getGifs } from './../../src/helpers/getGifs.js'

describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );//que sea mayor a 0
        
        //debe de tener esta estructura
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });        
    });
});