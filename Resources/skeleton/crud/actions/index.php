
    /**
     * Lists all {{ entity }} entities.
     *
{% if 'annotation' == format %}
     * @Route("/", name="{{ route_name_prefix }}")
     * @Template()
{% endif %}
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        /* Original

        $entities = $em->getRepository('{{ bundle }}:{{ entity }}')->findAll();

        return array('entities' => $entities);

        */


        $dql = "SELECT a FROM {{ bundle }}:{{ entity }} a";
        $query = $em->createQuery($dql);

{% if 'annotation' == format %}
        $paginator = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
            $query,
            $this->get('request')->query->get('page', 1)/*page number*/,
            25/*limit per page*/
        );

        return compact('pagination');
{% else %}
        return $this->render('{{ bundle }}:{{ entity|replace({'\\': '/'}) }}:index.html.twig', array(
            'entities' => $entities
        ));
{% endif %}
    }
