
    //  referencias a los elementos del formulario
    const cantidadTicketsInput = document.getElementById('cantidadTickets');
    const categoriaSelect = document.getElementById('categoriaSelect');
    const totalPagoSpan = document.getElementById('totalPago');
    const btnBorrar = document.getElementById('btnBorrar');
    const btnResumen = document.getElementById('btnResumen');

    // evento al botón "Resumen" para calcular y mostrar el total a pagar
    btnResumen.addEventListener('click', () => {
        const cantidadTickets = parseInt(cantidadTicketsInput.value);
        const categoria = parseInt(categoriaSelect.value);
        let precioUnitario;

        //  precios unitarios por categoría
        switch (categoria) {
            case 1:
                precioUnitario = 200 - (200 *0.8); // Precio para estudiantes
                break;
            case 2:
                precioUnitario = 200 - (200*0.5); // Precio para trainees
                break;
            case 3:
                precioUnitario = 200 -(200* 0.15); // Precio para junior
                break;
            default:
                precioUnitario = 200; // Precio sin categoría
        }

        const totalPagar = cantidadTickets * precioUnitario;
        totalPagoSpan.textContent = totalPagar;
    });

    // evento al botón "Borrar" para restablecer el formulario
    btnBorrar.addEventListener('click', () => {
        cantidadTicketsInput.value = '';
        categoriaSelect.value = '';
        totalPagoSpan.textContent = '';
    });
