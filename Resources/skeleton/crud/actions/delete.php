
    /**
     * Deletes a {{ entity }} entity.
     *
{% if 'annotation' == format %}
     * @Route("/{id}/delete", name="{{ route_name_prefix }}_delete")
     * @Template("{{ bundle }}:{{ entity }}:delete.html.twig")
{% endif %}
     */
    public function deleteAction($id)
    {
        $request = $this->getRequest();

        $em = $this->getDoctrine()->getEntityManager();

        $entity = $em->getRepository('{{ bundle }}:{{ entity }}')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Setting entity.');
        }

        if( $request->getMethod() == 'POST' )
        {
            $em->remove($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('{{ route_name_prefix }}'));
        }

        return array(
            'entity'      => $entity,
            );
    }