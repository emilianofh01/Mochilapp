#include <iostream>

using namespace std;

int main()
{
    int numero_de_tarea;

    cout << "selecciona que tarea quieres..." << endl;
    cin >> numero_de_tarea;
    switch (numero_de_tarea)
    {
    case 1:
        cout << " \t \t *programa que permita encontrar el mayor de 3 numero*" << endl;
        int numero_1, numero_2, numero_3;
        cout << "introduce el valor del primer numero" << endl;
        cin >> numero_1;
        cout << "Introduce el valor del segundo numero" << endl;
        cin >> numero_2;
        cout << "introduce el valor del tercer numero" << endl;
        cin >> numero_3;
        if (numero_1 > numero_2 && numero_1 > numero_3)
        {
            cout << "el valor numero uno es el mayor..." << numero_1 << endl;
        }
        else if (numero_2 > numero_1 && numero_2 > numero_3)
        {
            cout << "el Valor numero dos es el mayor..." << numero_2 << endl;
        }
        else if (numero_3 > numero_1 && numero_3 > numero_2)
        {
            cout << "el valor numero 3 es el mayor..." << numero_3 << endl;
        }
        break;
    case 2:
        cout << " \t \t *programa que verifique si un caracter es numérico, alfabético o especial*" << endl;
        break;
    case 3:
        cout << " \t \t programa que reciba la medida de los 3 lados de un triángulo e imprima si es equilatero, isosceles o escaleno" << endl;
        int lado_1, lado_2, lado_3;
        cout << "ingrese el primer lado del triangulo" << endl;
        cin >> lado_1;
        cout << "ingrese el segundo lado del triangulo" << endl;
        cin >> lado_2;
        cout << "ingrese el tercer lado del triangulo" << endl;
        cin >> lado_3;
        if (lado_1 == lado_2 && lado_1 == lado_3)
        {
            cout << "tu triangulo es equilatero" << endl;
        }
        else if (lado_1 == lado_2 || lado_1 == lado_3)
        {
            cout << "el triangulo es isoceles" << endl;
        }
        else
            cout << "el triangulo es escaleno" << endl;
        {
        }
        break;
    case 4:
        cout << " programa que reciba las coordenadas X, Y y determine en qué cuadrante se encuentra el punto" << endl;
        int x, y;
        cout << "Ingresa la cordenada de X" << endl;
        cin >> x;
        cout << "Ingresa la cordenada de Y" << endl;
        cin >> y;
        if (x > 0 && y > 0)
        {
            cout << x << "," << y << "tu cordenadas se encuntran en el primer cuadrante" << endl;
        }
        else if (x < 0 && y < 0)
        {
            cout << x << "," << y << "tu cordenada se encuentra en el tercer cuadrante" << endl;
        }
        else if (x > 0 && y < 0)
        {
            cout << x << "," << y << "tu cordenada se encuntra en el cuarto cuadrante" << endl;
        }
        else if (x < 0 && y > 0)
        {
            cout << x << "," << y << "tu cordenada se encuntra en el segundo cuadrante" << endl;
        }
        break;
    }
    return 0;
}
