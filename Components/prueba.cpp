/*
    Autor..: Emiliano Fernández Hernández
    Carrera: Ingenieria en desarrollo de software (IDS)
    Turno..: Matutino
    Descripcion: Ejercicios #4 - Estructuras de iteración
*/
#include <iostream>
#include <windows.h>
#include <time.h>

using namespace std;
int opcion_principal;

void gotoxy(int x, int y)
{
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), {x, y});
}

void createBox(int width, int height, int positionX, int positionY, int ascii_code = 42, bool withVertex = true)
{
    int finalPosX = width + positionX,
        finalPosY = height + positionY;

    for (int y = positionY; y <= finalPosY; y++)
    {
        for (int x = positionX; x <= finalPosX; x++)
        {
            gotoxy(x, y);
            if (x == positionX || y == positionY || y == finalPosY || x == finalPosX)
            {
                if (ascii_code == 205)
                {
                    unsigned char c201 = 201, c187 = 187, c188 = 188,
                                  c200 = 200, c186 = 186;

                    if (x == positionX && y == positionY)
                    {
                        cout << c201;
                    }
                    else if (x == finalPosX && y == positionY)
                    {
                        cout << c187;
                    }
                    else if (x == finalPosX && y == finalPosY)
                    {
                        cout << c188;
                    }
                    else if (x == positionX && y == finalPosY)
                    {
                        cout << c200;
                    }
                    else if (withVertex)
                    {
                        if (x == positionX || x == finalPosX)
                        {
                            cout << c186;
                        }
                        else if (withVertex == true)
                        {
                            cout << (char)ascii_code;
                        }
                    }
                }
                else
                {
                    cout << (char)ascii_code;
                }
            }
        }
    }
}

void supermercado()
{
    int opcion;
    do
    {
        int index_pos_y = 7, contador_productos = 1;
        float precio_producto = 0, total = 0;

        createBox(30, 2, 40, 1);
        gotoxy(45, 2);
        cout << "S u p e r  M a r k e t";

        gotoxy(70, 5);
        cout << "Precio";
        gotoxy(87, 5);
        cout << "Descuento";
        gotoxy(105, 5);
        cout << "Total";

        do
        {
            gotoxy(10, index_pos_y - 1);
            cout << "Ingrese el precio del articulo #" << contador_productos;
            createBox(35, 2, 10, index_pos_y);
            gotoxy(10, index_pos_y + 3);
            cout << "Para finalizar el cobro,ingrese un cero";
            gotoxy(12, index_pos_y + 1);
            cout << "$";
            cin >> precio_producto;

            if (precio_producto != 0)
            {
                gotoxy(52, index_pos_y);
                cout << "Articulo #" << contador_productos;
                gotoxy(70, index_pos_y);
                cout << "$" << precio_producto;
                gotoxy(87, index_pos_y);

                if (precio_producto >= 200)
                {
                    precio_producto -= (precio_producto * 0.15);
                    cout << "15%";
                }
                else if (precio_producto > 100 && precio_producto < 200)
                {
                    precio_producto -= (precio_producto * 0.12);
                    cout << "12%";
                }
                else
                {
                    precio_producto -= (precio_producto * 0.10);
                    cout << "10%";
                }
                gotoxy(105, index_pos_y);
                cout << "$" << precio_producto;

                for (int i = index_pos_y - 1; i <= index_pos_y - 1 + 4; i++)
                {
                    gotoxy(10, i);
                    cout << "                                       ";
                }

                total += precio_producto;
                index_pos_y++;
                contador_productos++;
            }
        } while (precio_producto != 0);

        for (int i = index_pos_y - 1; i <= index_pos_y - 1 + 4; i++)
        {
            gotoxy(10, i);
            cout << "                                       ";
        }
        gotoxy(10, index_pos_y - 1);
        cout << "Total";
        createBox(35, 2, 10, index_pos_y);
        gotoxy(12, index_pos_y + 1);
        cout << "$" << total;
        gotoxy(10, index_pos_y + 4);
        cout << "Deseas continuar con otro pedido?";
        gotoxy(10, index_pos_y + 5);
        cout << "1)Si   2)No";
        gotoxy(10, index_pos_y + 7);
        cout << "Opcion -> ";
        cin >> opcion;
        system("cls");
    } while (opcion != 2);
}

void adivinarNumero()
{
    int opcion;
    const int numero_limite = 3, numero_minimo = 0;
    srand(time(NULL));
    cout << "\n     - Adivine el numero secreto - \n\n";
    cout << "Tienes 4 oportunidades \n\n";

    do
    {
        int numero_aleatorio, numero_insertado, oportunidades = 4;
        numero_aleatorio = numero_minimo + rand() % (numero_limite + 1 - numero_minimo);
        do
        {
            cout << "\n\nIngrese un numero del " << numero_minimo << " al " << numero_limite << ": ";
            cin >> numero_insertado;

            if (numero_aleatorio != numero_insertado)
            {
                oportunidades--;
                string x = numero_aleatorio > numero_aleatorio ? "mayor"
                                                               : "menor";

                cout << "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
                cout << "\n El numero que ingresaste es " << x << " al numero secreto \n\n";
                cout << " Te quedan " << oportunidades << " oportunidades\n";
                cout << "*************************************************************************\n";
            }

            if (numero_insertado == numero_aleatorio)
            {
                cout << "\n\nFelicidades!! Has ganado :)";
                oportunidades = 0;
            }
            else if (oportunidades == 0)
            {
                cout << "\n\nHas perdido!! :(";
            }
        } while (oportunidades > 0);

        cout << "\n\nDeseas seguir jugando? 1)Si  2)No\n";
        cout << "Opcion -> ";
        cin >> opcion;
        system("cls");
    } while (opcion != 2);
}

void empleados()
{
    int opcion;
    cout << "              - Calculadora de horas trabajadas - \n\n";

    do
    {
        int horas_dia = 0, horas_semana = 0, sueldo_dia = 0, sueldo_semana = 0;

        cout << "\n\nIngrese el numero de horas trabajadas al dia: ";
        cin >> horas_dia;
        cout << "\n\nIngrese el pago por hora: ";
        cin >> sueldo_dia;

        horas_semana = horas_dia * 6;
        sueldo_semana = sueldo_dia * horas_semana;

        cout << "\n\nHoras trabajadas a la semana: " << horas_semana << endl;
        cout << "Sueldo semanal: " << sueldo_semana << endl;

        cout << "\nDesea continuar calculando horas trabajadas? 1)Si  2)No\n";
        cout << "Opcion -> ";
        cin >> opcion;

    } while (opcion != 2);
    system("cls");
}

int main()
{
    do
    {
        gotoxy(48, 2);
        cout << "M    E    N    U";
        createBox(33, 2, 39, 1, 205, false);
        createBox(60, 20, 25, 5);
        gotoxy(30, 7);
        cout << "1. SuperMarket";
        gotoxy(30, 9);
        cout << "2. Adivinar numero";
        gotoxy(30, 11);
        cout << "3. Empresa";
        gotoxy(30, 13);
        cout << "0. Salir";

        gotoxy(30, 20);
        cout << "Opcion -> ";
        cin >> opcion_principal;

        system("cls");
        switch (opcion_principal)
        {
        case 1:
            supermercado();
            break;
        case 2:
            adivinarNumero();
            break;
        case 3:
            empleados();
            break;
        }
    } while (opcion_principal != 0);
    return 0;
}
