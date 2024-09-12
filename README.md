# cf-managed-mta-userapi-ts for Cloud Foundry

> ℹ️ This project is based on an earlier project delivered by [Gregor Wolf](https://github.com/gregorwolf) - [HTML5UserAPIforCF](github.com/gregorwolf/HTML5UserAPIforCF)

This project provides a simple MTA application which serves links to a `Node.js` server written in [Typescript](https://www.typescriptlang.org/) that servers Endpoints do display user information from the BTP `user-api service`[https://help.sap.com/docs/btp/sap-business-technology-platform/user-api-service] as well as from a service hosted on a SAP-based backend.

It can be deployed as `Multi Target Application` to the SAP Cloud Platform - Cloud Foundry Environment (cf).

## Deploy to SAP Cloud Platform - Cloud Foundry

### Prerequisite

If you want to deploy the latest released version:

- You have a [SAP Business Technology Platform Platform Trial](https://cockpit.hanatrial.ondemand.com/), [Free Tier or productive account](https://cockpit.eu10.hana.ondemand.com/)
  - [Get an Account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
- The [Cloud Foundry command line tool](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) is installed
- The [MultiApps CF CLI Plugin](https://github.com/cloudfoundry-incubator/multiapps-cli-plugin) is installed
- You've connected using `cf login`to your BTP subaccount
- You've connected a [SAP Cloud Connector](https://tools.hana.ondemand.com/#cloud) to your subaccount
- [Principal Propagation is setup in the Cloud Connector to the ABAP Backend](https://blogs.sap.com/2017/06/22/how-to-guide-principal-propagation-in-an-https-scenario/)

If you want to build the current state of the repository:

- You have the Node.JS version defined in .nvmrc installed
- The [Cloud MTA Build Tool (MBT)](https://sap.github.io/cloud-mta-build-tool/) is installed

### Preperation

Before deploying the application to your Cloud Foundry account, you must first create the necessary destinations to the backend system. Below is the configuration I’ve used in my environment

If you want to test the connection to a SAP ABAP Backend via HTTP(S), then you have to create the destination `SAP_ABAP_BACKEND` used by the approuter:

```
URL=http\://vhcalnplci.dummy.nodomain\:44300
Name=SAP_ABAP_BACKEND
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=PrincipalPropagation
```

### Build and Deploy

To build and deploy the project run:

```
npm run build:cf
```

and then

```
npm run deploy:cf
```

### Undeploy

To undeploy the project run:

```
npm run undeploy:cf
```
