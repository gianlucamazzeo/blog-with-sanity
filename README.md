 # Blog con Sanity CMS

Questo repository contiene la configurazione e gli schemi per un blog implementato utilizzando Sanity CMS. Il progetto fornisce una struttura di base per un blog con articoli, autori, categorie e prodotti correlati.

## Installazione

Per iniziare con questo progetto, segui questi passaggi:

1. Registra un account su:

   https://www.sanity.io/

2.  Crea un nuovo progetto dal tuo pannello di controllo sanity:

    https://www.sanity.io/manage

3. Clona il repository

4. Installa Sanity CLI globalmente (se non l'hai già fatto):

     _npm install -g @sanity/cli_

5. Naviga nella directory del progetto e installa le dipendenze:

     _cd nome-progetto_

     _npm install_

6. Crea un file .env nella root del tuo progetto (se non esiste già) e aggiungi la tua variabile d'ambiente:

    _SANITY_STUDIO_PROJECT_ID=il_tuo_project_id (lo prendi dal pannello selezionando il progetto appena creato, lì dovresti trovare il PROJECT ID [sanity/studio](https://www.sanity.io/manage_))_

7.  Modifica il file sanity.cli.ts con la tua variabile d'ambiente SANITY_STUDIO_PROJECT_ID

    export default defineCliConfig({
        api: {
                projectId: process.env.SANITY_STUDIO_PROJECT_ID,
                dataset: 'production'
        }
    })



## Struttura del Progetto

Il progetto include i seguenti schemi principali:

- `post`: Definisce la struttura degli articoli del blog
- `author`: Rappresenta gli autori degli articoli
- `category`: Categorie per organizzare gli articoli
- `product`: Prodotti correlati agli articoli

Gli schemi sono definiti nella directory `schemaTypes/`.

## Personalizzazione

Puoi personalizzare gli schemi esistenti o aggiungerne di nuovi modificando i file nella directory `schemaTypes/`. Assicurati di aggiornare il file `index.ts` principale quando aggiungi nuovi schemi.

## Utilizzo

Dopo aver configurato il progetto, puoi avviare lo Studio Sanity localmente avviando il progetto in locale:

  _npm run dev_

Questo renderà il tuo Studio accessibile online all'indirizzo:

    http://localhost:3333/

## Integrazione Frontend

Questo repository contiene solo la configurazione backend di Sanity. Per un'implementazione completa del blog, dovrai creare un frontend separato che si connetta a questo backend Sanity utilizzando le API fornite.
