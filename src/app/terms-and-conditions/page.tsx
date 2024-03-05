"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const en = [
    "By signing this contract, the client acknowledges and accepts the following terms and conditions, which complement the current estimate:",
    "I. Patio repairs exclusions: The present estimate does not include patio repairs due to any damage caused by machinery access to the pool.",
    "II. Modifications and required documents exclusions: We do not include the costs associated with alterations to the residence or the documents requested by local authorities, such as the septic tank report, survey, fumigation, or other documents. Additionally, the demolition process (Demucking) and the installation of sprinklers are not covered in this estimate.",
    "III. Owner’s responsibility: The owner will be responsible for removing or relocating the aforementioned items for pool access before construction begins, and this is not included in the current estimate. Our services are limited solely to pool construction and do not include repairs or improvements to the patio, child safety fence, or chemical treatment to stabilize the pool water.",
    "IV. Waiting time for permits: Please be advised that the waiting time to obtain city permits after the plans are submitted is beyond our responsibility and control. However, we will provide a process number for the client to track the progress of the application.",
    "V. Deadline for corrections or modifications: The assigned engineer will require an estimated period of 4 to 8 business days to address any corrections or modifications requested by municipal authorities regarding the plans.",
    "VI. Equipment Warranty: Our company offers a one-year warranty on equipment and structures, provided that the same owner remains during that year. If you wish to claim the pool structure warranty due to wear or discoloration, please note that we will verify that the maintenance responsible party holds the appropriate licenses.",
    "VII. Pool construction division: Bass Pool divides the pool construction into different sections. Each section will require the owner to provide the necessary capital to complete that specific section. In case of non-payment, the subsequent section will remain pending until the required payment is made.",
    "VIII. Project cancellation and non-refundable deposit: In the event that the project is not carried out for any reason, please note that the initial deposit made will not be refundable. This is due to the expenses incurred in preparing the plans, submitting permits, and other administrative costs associated with the office.",
  ];
  const es = [
    "Al firmar este contrato, el cliente reconoce y acepta los siguientes términos y condiciones, los cuales complementan el presente presupuesto:",
    "I. Exclusiones de reparaciones de patio: El presente presupuesto no incluye las reparaciones de patio debido a cualquier daño ocasionados por el acceso de maquinaria a la piscina.",
    "II. Exclusiones de modificaciones y documentos requeridos: No incluimos los costos asociados a alteraciones en la residencia ni los documentos solicitados por las autoridades locales, como el informe del tanque septico, survey, fumigación ni otros documentos. Además, el proceso de demolición (Demucking) y la instalación de rociadores (Sprinklers) no están contemplados en este presupuesto.",
    "III. Responsabilidad del propietario: El propietario será responsable de eliminar o reubicar lo antes mencionado para el acceso a la piscina antes de que comience la construcción, sin que esto esté incluido en el presente presupuesto. Nuestros servicios se limitan solo a la construcción de la piscina y no incluyen reparaciones o mejoras en el patio, valla de seguridad para niños ni tratamiento para estabilizar el agua de la piscina con químicos",
    "IV. Tiempo de espera para permisos: Se advierte que el tiempo de espera para obtener los permisos de la ciudad una vez que los planos sean entregados no está bajo nuestra responsabilidad ni control. No obstante, se proporcionará un número de proceso para que el cliente pueda dar seguimiento al estado del trámite.",
    "V. Plazo para correcciones o modificaciones: El ingeniero encargado requerirá de un período estimado de 4 a 8 días hábiles para realizar cualquier corrección o modificación solicitada por las autoridades municipales en los planos.",
    "VI. Garantía de Equipos: Nuestra empresa ofrece un año de garantía en equipos y estructuras, siempre que permanezca el mismo propietario durante ese año. Si desea solicitar la garantía de la estructura de la piscina porque su piscina presentó desgaste o decoloración, tenga en cuenta que verificaremos que el responsable del mantenimiento tenga las licencias correspondientes",
    "VII. División de la construcción de la piscina: Bass Pool divide la construcción de la piscina en diferentes secciones. Cada sección requerirá que el propietario proporcione el capital necesario para el pago correspondiente a fin de completar dicha sección. En caso de no recibir el pago, la siguiente sección quedará pendiente hasta que se otorgue el pago requerido.",
    "VIII. Cancelación del proyecto y depósito no reembolsable: En caso de que por alguna razón no se lleve a cabo el proyecto, se informa que el primer depósito realizado no será reembolsable. Esto se debe a los gastos incurridos en la elaboración de los planos, presentación de licencias y otros gastos administrativos relacionados con la oficina.",
  ];

  const [english, setEnglish] = useState(true);
  const [data, setData] = useState(en);

  useEffect(() => {
    // This effect will be triggered whenever `english` changes
    if (english) {
      setData(en);
    } else {
      setData(es);
    }
  }, [english]);

  function handleLanguage() {
    setEnglish(!english);
  }
  return (
    <main className="my-28 md:my-36 px-6 w-[1380px] max-w-full  m-auto">
      {" "}
      <h1 className="text-4xl font-bold mb-10 text-center">
        {english ? "Terms & Conditions" : "Terminos & Condiciones"}
      </h1>
      <div className="">
        <div className="flex justify-end mb-10">
          <button
            className="px-8 py-2 bg-sky-950 text-white  rounded flex items-center w-fit gap-3 hover:bg-sky-950 hover:text-white transition-colors"
            onClick={handleLanguage}
          >
            {english ? "English" : "Spanish"}{" "}
          </button>
        </div>
        <ul className="space-y-5">
          {data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Page;
